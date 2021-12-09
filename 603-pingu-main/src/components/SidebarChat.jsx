import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import * as timeago from "timeago.js";
import { useDispatch } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../firebase/firebase";
import { async } from "@firebase/util";
import { setChat } from "../redux/features/chatSlice";

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  
  
  const fetchChat = useCallback(async () => {
    const chatRefById = query(collection(db, "chats"), where("id", "==", id));
    await getDocs(chatRefById).then((snapshot)=>{
      setChatInfo(
        snapshot.doc.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
        )
      })
      )
      
      if (chatInfo.length === 0) {
        fetchChat());
      }
    }, [chatInfo,id]);
    
    useEffect(() => {
  
      if(chatId){
        fetchMessages()
      }
    },[chatId, fetchMessage])

    
  return (
    <SidebarChatContainer onClick{()=> {
      dispatch(setChat({
        chatId: id,
        chatName
      })
    }}>
      <Avatar src ={chatInfo[0]?.photo/>
      <SidebarChatInfoContainer>
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <TimeStamp>{timeago.format(newDate(chatInfo[0]?.TimeStamp.))}</TimeStamp>
      </SidebarChatInfoContainer>
    </SidebarChatContainer>
  );
};

export default SidebarChat;

const SidebarChatContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  :hover {
    background-color: #3e93fd;
    color: white;
  }
`;

const SidebarChatInfoContainer = styled.div`
  margin-left: 15px;
  position: relative;
  width: 100%;
`;

const TimeStamp = styled.small`
  position: absolute;
  top: 5px;
  right: 0;
`;
