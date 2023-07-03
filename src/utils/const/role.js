const role = {
  owner: 1,
  staff: 2,
  courier: 3,
};

const getRole = (userRole) => {
  if (role.owner === userRole) {
    return "Owner";
  } else if (role.staff === userRole) {
    return "Staff";
  } else if (role.courier === userRole) {
    return "Courier";
  }
};

export default getRole;
