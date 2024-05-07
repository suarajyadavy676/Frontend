import React, { useContext } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function AccountMenu() {
  let navigate = useNavigate();
  let {name,setToken,token} = useContext(AuthContext)
  console.log(token)
  return (
    <div>
      <Menu>
        <MenuButton as={Button}>
        <span className="text-lg">
          <MdAccountCircle className="inline text-xl" /> Account
        </span>
        </MenuButton>
        <MenuList>
          <div>
            {token ? (
              <div className="flex px-2 justify-between">
                <p className="text-black">{name}</p>
                <button onClick={()=>setToken(null)}>LOG OUT</button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => navigate("/login")}
                  className="w-[90%] bg-black text-white text-center block mx-auto my-4 hover:bg-slate-500"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/createAccount")}
                  className="w-[90%] text-center block mx-auto my-4 border-2 hover:bg-slate-300"
                >
                  Register
                </button>
              </div>
            )}
            <button className="my-4 ml-2">Wishlist</button> <br />
            <button className="my-4 ml-2">Your Orders</button> <br />
            <button className="my-4 ml-2">Your Referrals</button>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}

export default AccountMenu;
