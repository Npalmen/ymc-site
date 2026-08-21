# Yellow Music United — Booking Domain Plan

**Document:** `docs/plans/areas/04-booking.md`  
**Parent:** `docs/plans/MASTER-PLAN.md`  
**Domain:** Booking  
**Status:** PLANNED

---

# 1. Objective

Build a native Yellow Music booking system integrated into the website and operationally connected to Google Calendar.

The booking system should create a simple customer experience while supporting the actual operational constraints of a music business.

Primary principle:

> Customers book through Yellow Music. Google Calendar supports the operation behind it.

Google Calendar should not define the customer-facing UX.

---

# 2. Initial customer flow

Primary booking flow:

```text
/boka
  ↓
Choose service
  ↓
Choose person/resource if relevant
  ↓
Choose date
  ↓
Choose available time
  ↓
Enter customer information
  ↓
Review booking
  ↓
Confirm
  ↓
Booking created
  ↓
Google Calendar synchronized
  ↓
Confirmation shown/sent
```

Keep the flow short.

Do not require account creation for initial booking.

---

# 3. Booking service types

The model must support multiple booking shapes.

Do not assume every booking only requires one calendar.

A service may require:

## Person only

Example conceptual use:

```text
singing lesson
```

Requires:

```text
service
teacher
duration
```

## Resource only

Example conceptual use:

```text
studio booking
```

Requires:

```text
service
studio
duration
```

## Person + resource

Example conceptual use:

```text
produced recording session
```

Requires:

```text
service
producer
studio
duration
```

## Flexible assignment

Future possibility:

```text
any available instructor
```

The availability engine may later select among valid staff.

Do not require this optimization in V1 unless actually needed.

---

# 4. Domain model

Initial conceptual entities:

```text
Service
StaffMember
Resource
AvailabilityRule
BlackoutPeriod
CalendarConnection
Booking
BookingRequirement
BookingHold
Customer
BookingEvent
```

---

# 5. Service

A service should be configurable with fields conceptually similar to:

```text
id
slug
name
description
active
durationMinutes
bufferBeforeMinutes
bufferAfterMinutes
minimumNoticeMinutes
maximumAdvanceDays
slotIntervalMinutes
locationType
requirements
```

Do not hardcode durations into components.

Do not invent Yellow Music prices.

Pricing should be optional until verified.

---

# 6. Staff member

Conceptually:

```text
id
name
active
bookable
calendarConnectionId?
```

A staff member may:

- provide one service
- provide several services
- use one or several calendars as availability constraints

---

# 7. Resource

Resources represent capacity that can conflict independently of people.

Examples:

```text
Studio A
Podcast room
specific production room
```

Conceptually:

```text
id
name
type
active
calendarConnectionId?
```

Do not create fictional Yellow Music resources.

Only configure verified real resources.

---

# 8. Availability rules

Availability must not simply mean:

> Google Calendar contains no event.

A valid slot must satisfy ALL relevant constraints.

Conceptually:

```text
VALID SLOT =
within bookable working hours
AND service available
AND staff available
AND resource available
AND no local booking conflict
AND no booking hold conflict
AND no Google busy conflict
AND minimum notice satisfied
AND maximum advance satisfied
AND buffers satisfied
```

---

# 9. Time model

Primary operational timezone:

```text
Europe/Stockholm
```

Store timestamps in a timezone-safe representation.

Never calculate availability with naive local timestamps.

Correctly handle:

- Swedish daylight saving changes
- UTC conversion
- dates crossing DST boundaries

Customer-facing times are displayed in the applicable business timezone unless future remote services explicitly support another model.

---

# 10. Interval rules

Treat bookings as intervals.

Use consistent interval semantics.

Recommended conceptual model:

```text
[start, end)
```

This means a booking ending at 11:00 does not inherently conflict with another beginning at 11:00 unless buffers create a conflict.

Buffers must be included when evaluating operational occupancy.

Example:

```text
service:
10:00–11:00

buffer after:
15 min

occupied:
10:00–11:15
```

---

# 11. Availability engine

Build the availability engine as domain logic independent of Google.

Suggested internal architecture:

```text
features/booking/
  availability/
    generate-candidate-slots.ts
    apply-working-hours.ts
    apply-service-rules.ts
    apply-local-conflicts.ts
    apply-external-busy.ts
    apply-resource-conflicts.ts
```

The engine receives normalized busy intervals.

It should not know how Google HTTP APIs work.

---

# 12. Google Calendar role

Google Calendar has two main responsibilities.

## A. Availability constraint

Existing busy periods must block customer booking.

The integration layer should normalize Google availability into internal intervals.

Conceptually:

```text
Google
   ↓
Calendar adapter
   ↓
BusyInterval[]
   ↓
Booking availability engine
```

## B. Operational booking event

When a customer successfully books, create/update the corresponding operational calendar event.

The event should contain only appropriate operational information.

Avoid unnecessary personal information.

---

# 13. Source of truth

Recommended architecture:

```text
Yellow Music booking database
=
booking source of truth

Google Calendar
=
availability constraint + operational mirror
```

Do not make Google Calendar event descriptions the booking database.

Reasons:

- bookings need explicit states
- auditability
- cancellation state
- idempotency
- customer details
- failure tracking
- future payment support
- future notifications
- resource requirements

Document this architecture as an ADR before implementation.

---

# 14. Google authorization

Calendar connections require authenticated Google access.

Use OAuth.

Principles:

- server-side token handling
- least privilege
- minimal scopes
- secure refresh-token storage
- no token exposure to browser
- explicit connection status
- explicit disconnect capability

Admin UI should eventually display something similar to:

```text
Google Calendar
Connected ✓

Calendar:
Yellow Music

Last sync:
...

Reconnect
Disconnect
```

Do not expose credentials.

---

# 15. Calendar mappings

Do not hardcode one global calendar assumption.

Create explicit mappings.

Examples:

```text
StaffMember → CalendarConnection

Resource → CalendarConnection
```

Availability may need to query several calendars for a single booking.

Example:

```text
Sånglektion
requires:
Biim

Check:
Biim's blocking calendars
```

Example:

```text
Studio session
requires:
Studio + Producer

Check:
studio calendar
producer calendar
```

---

# 16. Candidate slot generation

Slot generation should roughly work as:

```text
1. Load service rules
2. Load applicable staff/resources
3. Load working hours
4. Determine requested date window
5. Generate candidate starts
6. Apply service duration
7. Apply buffers
8. Load existing bookings
9. Load booking holds
10. Load external busy intervals
11. Remove conflicting slots
12. Return valid customer-facing slots
```

Do not fetch Google independently for every individual slot.

Fetch an appropriate time window and evaluate locally.

---

# 17. Booking concurrency

A displayed slot is NOT a guarantee that it remains available.

Two users can select the same time simultaneously.

Therefore booking creation must revalidate availability server-side.

Recommended flow:

```text
Customer selects slot
      ↓
Server receives booking request
      ↓
Validate input
      ↓
Create short booking hold / transactional lock
      ↓
Recheck availability
      ↓
Create booking
      ↓
Synchronize external calendar
      ↓
Confirm
```

Database constraints/transactions should protect against duplicate internal bookings.

Do not rely on browser state for concurrency protection.

---

# 18. Booking holds

Short-lived holds may be used during final confirmation.

Conceptually:

```text
BookingHold

id
service
requirements
startsAt
endsAt
expiresAt
```

Expired holds must not block future availability.

Avoid long holds that unnecessarily remove availability.

Exact expiration duration should be decided during implementation based on UX.

---

# 19. Booking states

Use explicit booking state.

Recommended initial model:

```text
PENDING
CONFIRMED
CANCELLED
COMPLETED
NO_SHOW
FAILED
```

External synchronization state should be separate where useful.

For example:

```text
NOT_REQUIRED
PENDING
SYNCED
FAILED
```

Do not overload one status field with unrelated meanings.

---

# 20. Booking creation safety

The system must not tell a customer:

> Booking confirmed

until the booking has reached the required durable state.

A sensible initial sequence:

```text
validate
   ↓
reserve internally
   ↓
create required calendar event
   ↓
record external identifier
   ↓
mark confirmed
   ↓
return confirmation
```

External failures must be explicit.

Never silently lose Calendar synchronization.

---

# 21. Idempotency

Public booking creation is a write operation.

Protect against accidental duplicate submissions.

Examples:

- double click
- browser retry
- slow network
- server retry

Booking creation must support idempotent handling.

The same legitimate request should not create two bookings because the client retried.

---

# 22. Calendar event identity

Store the external calendar event identifier on the booking/calendar-sync record.

This allows:

- update
- cancellation
- reconciliation
- duplicate prevention

Do not search Google Calendar by customer name to identify bookings.

---

# 23. Cancellation

V1 architecture must support cancellation even if the first UI is simple.

Cancellation flow:

```text
Booking
   ↓
Validate cancellation
   ↓
Mark/change booking state
   ↓
Update/delete corresponding Calendar event
   ↓
Send/update customer confirmation
```

Cancellation rules should be configuration, not hardcoded legal/business assumptions.

---

# 24. Rescheduling

Rescheduling should be treated as a controlled booking change.

Conceptually:

```text
existing booking
      ↓
select replacement slot
      ↓
hold replacement
      ↓
validate replacement
      ↓
update booking
      ↓
update calendar
      ↓
release old slot
```

Never release the existing valid booking before the replacement has passed required checks.

---

# 25. Customer information

Initial booking should collect only necessary information.

Likely:

```text
name
email
phone if operationally required
booking notes if genuinely useful
consent/acceptance where required
```

Do not collect unnecessary personal information.

Free-text notes should not request sensitive information.

---

# 26. Customer-facing booking UI

The booking experience must visually belong to Yellow Music.

It must NOT feel like an unrelated admin tool.

## Step 1

```text
Vad vill du boka?
```

Service selection.

## Step 2

Where relevant:

```text
Vem vill du boka?
```

or automatically handle assignment if the service does not require customer selection.

## Step 3

```text
Välj dag
```

Calendar/date selection.

## Step 4

```text
Lediga tider
```

Only valid slots shown.

## Step 5

```text
Dina uppgifter
```

Minimal form.

## Step 6

```text
Kontrollera bokningen
```

Clearly show:

- service
- date
- start time
- duration
- person/resource where customer-relevant
- location
- price only if verified and applicable

## Step 7

Confirmation.

Clearly communicate:

```text
Bokningen är bekräftad
```

only when actually confirmed.

---

# 27. Empty states

Design explicit UX for:

## No slots on selected date

Offer:

```text
nearest available dates
```

rather than simply:

```text
No availability
```

## No future availability

Provide contact path.

## Calendar temporarily unavailable

Do not guess availability.

Fail safely and explain that online availability cannot currently be loaded.

---

# 28. Loading behavior

Availability may depend on external services.

The UI should have deliberate:

- skeleton/loading state
- empty state
- external error state
- retry path

Prevent layout jumps.

---

# 29. Google Business Profile booking path

The canonical public booking URL should be:

```text
https://www.yellowmusicunited.se/boka
```

or the final equivalent production route.

Google Business Profile should direct customers into the same Yellow Music booking experience.

Do not create a second independent booking system specifically for Google.

Conceptually:

```text
Google Search / Maps
          ↓
        Boka
          ↓
yellowmusicunited.se/boka
          ↓
same booking engine
```

Initial configuration can be performed independently of deeper Business Profile automation.

---

# 30. Confirmation notifications

Booking architecture should support transactional notifications.

Initial events:

```text
booking_confirmed
booking_cancelled
booking_rescheduled
```

Potential later events:

```text
booking_reminder
booking_follow_up
review_request
```

Notification delivery should be behind an internal provider interface.

Do not tightly couple booking logic to a specific email provider.

---

# 31. Reminders

Design for reminders, but they do not need to block the initial booking launch.

Potential configuration:

```text
reminder rules
delivery channel
relative send time
enabled/disabled
```

Do not hardcode reminder timings before business requirements are confirmed.

---

# 32. Payment boundary

Payment is NOT part of initial booking implementation unless explicitly activated later.

However booking architecture should leave a clean boundary for:

```text
PaymentRequirement
PaymentStatus
Deposit
```

Do not prematurely build Stripe or another payment provider.

A future booking may require:

```text
booking hold
   ↓
payment
   ↓
confirmation
```

The current architecture must not make that impossible.

---

# 33. Recurring bookings

Potential future use:

- recurring singing lessons
- lesson packages

Do not build recurrence in V1 unless confirmed as necessary.

But avoid data models that assume every customer relationship consists of one isolated appointment forever.

---

# 34. Admin requirements

Initial administration should eventually allow the owner to configure:

## Services

- active/inactive
- duration
- bookability
- relevant staff/resources
- buffers
- notice
- booking horizon

## Availability

- working hours
- exceptions
- holidays/blackouts

## Google

- connection
- calendar mappings
- connection health

## Bookings

- list
- details
- cancel
- reschedule
- status

Do not build a huge back-office product before the customer booking flow works.

---

# 35. Manual override

The business must not become dependent on automation with no escape route.

Authorized admin should eventually be able to:

- block time
- create manual booking
- cancel booking
- change booking
- inspect sync failures

All changes should preserve auditability.

---

# 36. Calendar changes outside the application

Users may directly change Google Calendar.

The system needs an explicit policy.

Recommended direction:

External non-booking events:

```text
affect future availability
```

Yellow Music-created booking events:

```text
are mirrored from booking records
```

Later phase should support synchronization/reconciliation if these booking events are manually changed or deleted externally.

Do not silently assume Google Calendar will never be edited manually.

---

# 37. Reconciliation

Introduce reconciliation before relying on booking integration operationally at scale.

Conceptually verify:

```text
CONFIRMED BOOKING
↔
EXPECTED GOOGLE EVENT
```

Detect:

- missing event
- unexpected deletion
- mismatched time
- disconnected calendar
- expired credentials

Provide actionable admin status.

---

# 38. Security

Booking endpoints require:

- server-side validation
- anti-abuse controls
- rate limiting where appropriate
- CSRF-aware architecture where applicable
- no trust in client-provided duration/price/resource IDs
- no secrets in browser
- secure OAuth token storage
- input sanitization
- safe error messages

Never return Google access tokens to the frontend.

---

# 39. Privacy

Booking data is customer personal information.

Apply:

- data minimization
- documented purpose
- appropriate retention
- controlled access
- no PII in analytics
- no PII in URLs
- no PII in public logs

Legal/privacy implementation should be verified before production.

---

# 40. Observability

Operational booking failures must be diagnosable.

Record structured events such as:

```text
availability_query_failed
booking_created
calendar_sync_started
calendar_sync_succeeded
calendar_sync_failed
booking_cancelled
booking_rescheduled
```

Do not log secrets or unnecessary customer content.

---

# 41. Testing

## Unit tests

Availability logic:

- overlapping event
- exact boundary
- buffer before
- buffer after
- staff conflict
- resource conflict
- local booking conflict
- external busy conflict
- minimum notice
- maximum horizon
- DST transition
- unavailable day

## Integration tests

- Calendar adapter
- booking creation
- idempotency
- cancellation
- rescheduling
- external failure

Use controlled test calendars/accounts for live integration testing.

## Concurrency tests

Verify:

```text
two users attempt same slot
```

Only one valid booking may win where capacity is one.

## E2E tests

Customer:

```text
open /boka
select service
select date
select slot
enter details
confirm
receive success
```

Failure cases must also be tested.

---

# 42. Booking implementation phases

Do not build the entire domain in one uncontrolled pass.

## B0 — Domain specification

Deliver:

- verified service requirements
- verified staff/resources
- ADR for source of truth
- final data model
- Calendar integration requirements

Gate:

```text
BOOKING_DOMAIN_READY
```

## B1 — Booking UI prototype

No live writes.

Deliver:

- service selection
- date selection
- time UI
- customer form
- review
- confirmation visual state

Use controlled fixture data.

Gate:

```text
BOOKING_UX_APPROVED
```

## B2 — Local booking engine

Deliver:

- database
- services
- availability rules
- internal bookings
- holds
- conflict protection
- state model
- API/server actions

No production Google dependency required yet.

Gate:

```text
LOCAL_BOOKING_ENGINE_PASS
```

## B3 — Google availability

Deliver:

- OAuth connection
- Calendar adapter
- calendar mapping
- Free/Busy normalization
- external busy filtering
- connection failure handling

Gate:

```text
GOOGLE_AVAILABILITY_PASS
```

## B4 — Calendar writes

Deliver:

- event creation
- external event ID persistence
- cancellation sync
- reschedule sync
- idempotency
- explicit failure handling

Gate:

```text
GOOGLE_BOOKING_SYNC_PASS
```

## B5 — Customer notifications

Deliver:

- confirmation
- cancellation
- reschedule messages

Provider architecture should remain replaceable.

Gate:

```text
BOOKING_NOTIFICATIONS_PASS
```

## B6 — Admin minimum

Deliver:

- booking list
- booking detail
- service configuration
- availability configuration
- calendar connection health
- cancel/reschedule controls

Gate:

```text
BOOKING_ADMIN_PASS
```

## B7 — Production qualification

Verify:

- real Google account
- real test calendar
- real browser flow
- mobile
- double booking protection
- external failure
- daylight saving/timezone
- cancellation
- rescheduling
- disconnected Calendar
- security configuration
- privacy requirements

Gate:

```text
BOOKING_PRODUCTION_READY
```

---

# 43. Explicitly deferred

Unless separately approved:

```text
payments
deposits
subscriptions
customer accounts
memberships
packages
gift cards
waiting lists
automated Google review campaigns
SMS
advanced CRM
multi-location support
Reserve with Google partner integration
```

Architecture should accommodate future evolution without implementing it prematurely.

---

# 44. Definition of done

Booking is production-ready only when:

- customer flow is polished
- services are based on verified business data
- availability is correct
- Google busy time is respected
- concurrent booking is protected
- confirmed bookings are durable
- Calendar writes are reliable
- errors fail safely
- cancellation works
- rescheduling works if in launch scope
- mobile UX is verified
- privacy requirements are satisfied
- operational failures can be diagnosed
- documentation matches reality

Final gate:

```text
BOOKING_PRODUCTION_READY
```
