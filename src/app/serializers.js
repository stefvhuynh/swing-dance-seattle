const arrayType = (array) => array || [];
const stringType = (string) => string || "";
const numberType = (number) => number || -1;
const booleanType = (boolean) => boolean || false;

export const serializeClasses = (classes) =>
  Object.values(classes).map((danceClass) => ({
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
