const arrayType = array => array || [];
const booleanType = boolean => boolean || false;
const numberType = number => number || 0;
const stringType = string => string || "";

export const serializeClasses = classes =>
  Object.values(classes).map(danceClass => ({
    danceStyles: arrayType(danceClass.danceStyles),
    id: stringType(danceClass.id),
    link: stringType(danceClass.link),
    name: stringType(danceClass.name),
    neighborhood: stringType(danceClass.neighborhood),
    organization: stringType(danceClass.organization),
    recurrenceDay: numberType(danceClass.recurrenceDay),
    recurrenceTimes: arrayType(danceClass.recurrenceTimes),
    time: stringType(danceClass.time),
    venue: stringType(danceClass.venue)
  }));

export const serializeDances = dances =>
  Object.values(dances).map(dance => ({
    danceStyles: arrayType(dance.danceStyles),
    hasDropInClass: booleanType(dance.hasDropInClass),
    hasLiveMusic: booleanType(dance.hasLiveMusic),
    id: stringType(dance.id),
    link: stringType(dance.link),
    name: stringType(dance.name),
    neighborhood: stringType(dance.neighborhood),
    organization: stringType(dance.organization),
    recurrenceDay: numberType(dance.recurrenceDay),
    recurrenceTimes: arrayType(dance.recurrenceTimes),
    time: stringType(dance.time),
    venue: stringType(dance.venue)
  }));

export const serializeEvents = events =>
  Object.values(events).map(event => ({
    danceStyles: arrayType(event.danceStyles),
    dateEnd: stringType(event.dateEnd),
    dateStart: stringType(event.dateStart),
    hasLiveMusic: booleanType(event.hasLiveMusic),
    id: stringType(event.id),
    link: stringType(event.link),
    name: stringType(event.name),
    organization: stringType(event.organization),
    weekendEvent: booleanType(event.weekendEvent)
  }));
