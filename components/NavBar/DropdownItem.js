import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
export default function DropdownItem({ data }) {
  const router = useRouter();

  return (
    <Wrapper
      onClick={() => {
        router.push("/category/" + data.id);
      }}
    >
      <Title>{data.name}</Title>
    </Wrapper>
  );
}
const Wrapper = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  :hover {
    background-color: #f5f6f7;
  }
`;

const Title = styled.h4`
  color: #2f3337;
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 2px 8px 10px;
  line-height: 1.2;
`;

const Search = styled.input`
  border: 1px solid #dadcdf;
  border-radius: 4px 0 0 4px;
  background-color: #f9fafb;
  padding: 0 10px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: transparent;
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 4px 4px 0;
  transform: translateX(-1px);
  color: black;
  font-size: 30px;
  position: absolute;
  right: 0;
  @media ${(props) => props.theme.mobileL} {
    background-color: #ff1f2c;
    color: white;
  }
  /* outline: 2px solid black; */
`;
