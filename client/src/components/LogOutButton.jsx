import { LuLogOut } from "react-icons/lu";
import ConfirmDialog from "./ConfirmDialog";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/AuthAction";
import { toast } from "react-toastify";

export default function LogOutButton() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.clear();
    toast.success("Logout Successfull!");
  };

  return (
    <ConfirmDialog
      triggerText="LogOut"
      message="Are you sure you want to Logout?"
      onConfirm={handleLogOut}
      buttonType="logout"
    />
  );
}
