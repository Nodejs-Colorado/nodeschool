module.exports = function check_valid_users(good_users_array) {
  return function (users_to_check_check_array) {
    return users_to_check_check_array.every(function (users_to_check_check_array) { // every - which elements pass the test
      return good_users_array.some(function (good_users_array) { // some tests to see if an element from the submitted array is part of the good users array
        return good_users_array.id === users_to_check_check_array.id;
      });
    });
  };
}