import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  DashboardHeader,
  MainContentArea,
  UserParent
 } from "./user.styles.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import { sideBarLinks } from "./user.routes.js";
import VoterHome from "../../pages/voter-home/Voterhome.js";
import Poll from "../../pages/poll/Poll";
import PresidentialPoll from "../../pages/presidential-poll/PresidentialPoll.js";




const User = () => {
  

return (
  <UserParent>
     <Sidebar routes={sideBarLinks} />
     <MainContentArea>
    <DashboardHeader>
      </DashboardHeader>
   
      <div
        className=""
        style={{
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
         <Routes>
         <Route index element={<VoterHome />} />
         <Route path="/" element={<VoterHome />} />
         <Route path="/poll" element={<Poll />} />
         <Route path="/presidential-poll" element={<PresidentialPoll/>}/>


          </Routes>
          
           
            




      </div>







    






    </MainContentArea>

  </UserParent>




)


}


export default User;