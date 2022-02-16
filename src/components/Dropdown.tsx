
import React from "react";

 import styled from "styled-components";

const SSelect = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;



interface IDropdownProps{
    values:string[];
}

const Dropdown = ({values}:IDropdownProps)  =>  {
  console.log(values);
    // return(
    //     <SSelect>
    //     <option value="" hidden>
    //       Type
    //     </option>
    //     <option value="1">Audi</option>
    //     <option value="2">BMW</option>
    //     <option value="3">Citroen</option>
    //     <option value="4">Ford</option>
    //   </SSelect>
    // )
    return (<>{
        values.length === 0 ?
          (<SSelect>
             <option value="1">Network</option> 
          </SSelect>
          )
        :        
        values.forEach((val,index)=>{return <SSelect>
                   <option value={index}>{val}</option>
                </SSelect>
            }            
        )
    }</>);
};

export default Dropdown;
    