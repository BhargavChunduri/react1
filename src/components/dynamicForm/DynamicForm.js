import React, { useState } from "react";

const initialUsers = [
  {
    fName: "sanjay",
    lName: "samantra",
    skills: [
      { skillName: "HTML", exp: 5 },
      { skillName: "CSS", exp: 4 },
    ],
  },
];
const emptyUser = {
  fName: "",
  lName: "",
  skills: [],
};


export default function DynamicForm() {
  const [users, setUsers] = useState(initialUsers);
  const [emptySkill,setEmptySkill] = useState({ skillName: "", exp: 0 });


  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, emptyUser]);
  };
  const addSKill = (userInd,addingSkill) => {
    //e.preventDefault();
    console.log(addingSkill);
    users[userInd].skills.push(addingSkill);
    setUsers([...users])
    setEmptySkill({ skillName: "", exp: 0 });
  };
const changeHandler = (e) =>{
    if(e.target.name ==='skillName'){
        console.log(e.target.value);
        emptySkill.skillName = e.target.value;
    }else{
        console.log(e.target.value);
        emptySkill.exp = e.target.value;
    }
    
}

  return (
    <div>
      <form>
        {users.map((user, userInd) => {
          return (
            <div key={userInd} className="border p-2 m-2">
              First Name:
              <input
                name="fName"
                placeholder="First Name"
                value={user.fName}
                onChange={(e) => {}}
              />
              Last Name:
              <input
                name="lName"
                placeholder="Last Name"
                value={user.lName}
                onChange={(e) => {}}
              />
              <br />
              Skills :
              {user.skills.map((skill, skillInd) => {
                return (
                  <>
                    <div key = {skillInd}>
                    {skill.skillName}-{skill.exp},
                    </div>
                  </>
                );
              })}
              <input name = 'skillName' onChange={changeHandler} />
              <input name = 'exp' onChange={changeHandler} />
              <button onClick={(e) => {
                e.preventDefault();
                addSKill(userInd,emptySkill)}} 
                className="m-2">Add Skill</button>
            </div>
          );
        })}
        <button onClick={addUser} className="m-2">
          Add User
        </button>
      </form>
    </div>
  );
}
