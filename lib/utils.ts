export const FormatDate = (datestr: string) => {
  const date = new Date(datestr);
  const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formatter.format(date);
};
