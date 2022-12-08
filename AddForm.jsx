// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "./src/redux/modules/todos";
// import styled from "styled-components";

// const AddForm = () => {
//   const [input, setInput] = useState({ title: "", text: "" });
//   //useSelector를 사용하여 todos.todos를 조회
//   //component에서 store를 조회할때는 useSelect를 사용한다.
//   //초기값에 접근이 가능하다.
//   const todos = useSelector((state) => state.todos.todos);
//   const dispatch = useDispatch();

//   const addHandler = (e) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };

//   const onSubmitHandler = (e) => {
//     if (input === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
//     dispatch(addTodo(input));
//   };

//   return (
//     <StFormContainer>
//       <form onSubmit={onSubmitHandler}>
//         <label>Todos의 제목을 입력하세요</label>
//         <StInput
//           type="text"
//           value={input.title}
//           name="title"
//           onChange={addHandler}
//         />
//         <StInput
//           type="text"
//           value={input.text}
//           name="text"
//           onChange={addHandler}
//         />
//         <StButton>추가하기</StButton>
//       </form>
//     </StFormContainer>
//   );
// };

// export default AddForm;

// const StFormContainer = styled.div`
//   display: flex;
//   gap: 24px;
//   padding: 30px;
// `;

// const StButton = styled.button`
//   border: none;
//   background-color: #eee;
//   height: 25px;
//   cursor: pointer;
//   width: 120px;
//   border-radius: 12px;
// `;

// const StInput = styled.input`
//   border: 1px solid #eee;
//   margin: 0 24px;
//   height: 25px;
//   width: 300px;
//   border-radius: 12px;
//   outline: none;
//   padding: 0 10px;
// `;
