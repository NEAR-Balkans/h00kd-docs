# H00kd Metadata

<!-- Necessary comment to make work below header tag -->

## Overview

TODO: Some generic decription...

## Event State Transition

![alt text](../../static/img/event_state_transition.png)

All events have three possible states. Each state indicates also what kind of actions can be done for a particular event.

### Opened

Opened event is the initial state of all events. On this state, the owner can add new public keys linked to the event and users can claim or create NEAR accounts.

### Closed

A closed event indicated that the event has ended. An event can move to this state only of the block time is higher than the event end date. After the transition, all remaining allocated funds are sent back to the event owner.

### Cancelled

A cancelled evend indicated that the event has been cancelled. An event canm move to this state only if the block time is lower thant the event start date. After the transition, all the allocated funds are sent back to the event owner.

**Note: after closing or cancelling an event, all interactions with that event are disabled**
