
var users=[
    { Id:"0", UserName: "Soros György", Authority: "LV4" },
    { Id:"1", UserName: "Soros ", Authority: "LV3" },
    { Id:"2", UserName: "György", Authority: "LV2" },
    { Id:"3", UserName: "Miki György", Authority: "LV1" }
];
var userGroupFunctions=[
  { functionName:"Hőmérő", UserGroupName1: 0,UserGroupName2: 1,UserGroupName3: 0,UserGroupName4: 1 },
  { functionName:"Páramérő",UserGroupName1: 1,UserGroupName2: 0,UserGroupName3: 0,UserGroupName4: 0},
  { functionName:"Haszons riportok",UserGroupName1: 0,UserGroupName2: 1,UserGroupName3: 1,UserGroupName4: 0},
  { functionName:"Több adat",UserGroupName1: 1,UserGroupName2: 1,UserGroupName3: 0,UserGroupName4: 0}
];


function AddTable(){
  /*Feltölti a táblázatot*/
  let tbody = document.querySelector("#table tbody");
  for ( let i = 0; i < users.length; i++ ) 
  {
    let tr = document.createElement("tr");
    for ( let user of Object.values(users[i]) ) {
      let td = document.createElement("td");
      td.innerHTML = user;
      tr.appendChild(td);
    }
    /*Gombok létrehozása */
    let td = document.createElement("td");
    let buttongroup = addButtonGroup();
    
    buttongroup.appendChild(addButton("Szerkesztés","btn btn-warning",users[i].Id));
    buttongroup.appendChild(addButton("Törlés","btn btn-danger",users[i].Id));
    td.appendChild(buttongroup);
    tr.appendChild(td);
    
   tbody.appendChild(tr);
  }
}
function addButtonGroup(){
  let buttongroup = document.createElement("div");
  buttongroup.className="btn-group";
  buttongroup.setAttribute("role", "group");
  buttongroup.setAttribute("aria-label", "Basic example");
  
  return buttongroup;
}
function addButton(name,btnclass,userID){
  let editButton=document.createElement("button");
  editButton.innerHTML=name;
  editButton.className=btnclass;
  editButton.value=userID;
  return editButton;
}
function authorityId(authorityname){
 
  switch(authorityname){
    case "LV1":
      return 0;
    case "LV2":
      return 1;
    case "LV3":
      return 2;
    case "LV4":
      return 3;
  }
}
$(document).ready(function(){
//Oldal betöltődéskor berakom a Táblázatot a felületre
  AddTable();
  AddTableUserGroupFunctions();
  $(".btn-warning").click(function(){
    var username=users[$(this).val()].UserName;
    var authorityname=users[$(this).val()].Authority;
    
    $("#username").val(username);
    $("#authority").val(authorityId(authorityname));
    console.log(authorityId(authorityname));
  });
});

//userGroupTable
function AddTableUserGroupFunctions(){
  /*Feltölti a táblázatot*/
  let tbody = document.querySelector("#userGroupTable tbody");
  for ( let i = 0; i < userGroupFunctions.length; i++ ) 
  {
    let tr = document.createElement("tr");
    for ( let func of Object.values(userGroupFunctions[i]) ) {
      let td = document.createElement("td");
      if(func.length>2){
        td.innerHTML=func;
      }else{
       let func_checkbox=document.createElement("input");
        func_checkbox.type="checkbox";
        func_checkbox.checked=func;
        
        td.appendChild(func_checkbox);   //func;
      }
      tr.appendChild(td);
    }
   tbody.appendChild(tr);
  }
}