function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    let subStr = str.substring(0, num);
    return subStr + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // should return "A-tisket..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket"
truncateString("A-", 1); // should return "A..."