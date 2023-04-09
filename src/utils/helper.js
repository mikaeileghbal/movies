export const getCommaSeperatedText = (stringArray = []) => {
  return stringArray.reduce((result, next, index) => {
    if (index === stringArray.length - 1) return (result += next.name);
    return (result += next.name + ", ");
  }, "");
};

export const formatCurrency = (amount) => {
  const formater = new Intl.NumberFormat("en-US");
  return `$${formater.format(amount)}`;
};

export const formatDate = (date) => {
  if (!date) return "";

  const formater = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formater.format(Date.parse(date));
};

export const formatRuntime = (duration) => {
  if (!duration) return "0";
  const hour = Math.floor(duration / 60);
  const minute = Math.floor(duration % 60);
  return `${hour}h ${minute}min`;
};
