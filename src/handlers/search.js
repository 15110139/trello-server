import Base from "./base";
import UserModel from "../models/User";

class SearchHandler extends Base {
  async searchUser(textSearch) {
    let listUser = await UserModel.find({
      $or: [
        { username: { $regex: textSearch, $options: "i" } }, //find by username
        { email: { $regex: textSearch, $options: "i" } }, //find by email
        { firstName: { $regex: textSearch, $options: "i" } }, //find by full name
        { lastName: { $regex: textSearch, $options: "i" } },
        { fullName: { $regex: textSearch, $options: "i" } } // find by phone number
      ]
    });

    return listUser;
  }
}

export default SearchHandler;
