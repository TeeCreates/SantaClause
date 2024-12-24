import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Flag>
        <Hat>
          <Hat_a></Hat_a>
          <Hat_b></Hat_b>
          <Hat_c></Hat_c>
          <Hat_d></Hat_d>
        </Hat>
        <Face>
          <Face_a>
            <Eye>
              <Left_eye></Left_eye>
              <Right_eye></Right_eye>
            </Eye>
            <Side>
              <LeftSide>
                <X></X>
                <Y></Y>
                <Z></Z>
              </LeftSide>
              <RightSide>
                <X></X>
                <Y></Y>
                <Z></Z>
              </RightSide>
            </Side>
          </Face_a>
          <Moustache>
            <Moustache_1></Moustache_1>
            <Moustache_2></Moustache_2>
          </Moustache>
          <LowerFace>
            <Teeth></Teeth>
            <Mouth></Mouth>
            <Tongue></Tongue>
          </LowerFace>
          <Beard>
            <Beard_a></Beard_a>
            <Beard_b></Beard_b>
            <Beard_c></Beard_c>
          </Beard>
          <Beard>
            <Beard_d></Beard_d>
            <Beard_d></Beard_d>
            <Beard_d></Beard_d>
            <Beard_d></Beard_d>
            <Beard_d></Beard_d>
          </Beard>
        </Face>
      </Flag>
    </Wrapper>
  );
}

export default App;

const LowerFace = styled.div`
  height: 40px;
  width: 90px;
  border-radius: 0 0 50% 50%;
  background-color: #b58457;
  z-index: 2;
`;
const Moustache = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  position: absolute;
  top: 30px;
  z-index: 3;
`;
const Moustache_1 = styled.div`
  height: 25px;
  width: 55px;
  background-color: #e0e0de;
  border-radius: 100% 0 70% 0;
`;
const Moustache_2 = styled.div`
  height: 25px;
  width: 55px;
  background-color: #e0e0de;
  border-radius: 0% 100% 0% 70%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const Flag = styled.div`
  width: 360px;
  height: 250px;

  background-image: linear-gradient(
    45deg,
    #49ab4e 10%,
    #f5f3f2 10%,
    #f5f3f2 20%,
    #49ab4e 20%,
    #49ab4e 30%,
    #f5f3f2 30%,
    #f5f3f2 40%,
    #49ab4e 40%,
    #49ab4e 50%,
    #f5f3f2 50%,
    #f5f3f2 60%,
    #49ab4e 60%,
    #49ab4e 70%,
    #f5f3f2 70%,
    #f5f3f2 80%,
    #49ab4e 80%,
    #49ab4e 90%,
    #f5f3f2 90%,
    #f5f3f2 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Hat_a = styled.div`
  background-color: red;
  border-radius: 50px 0px 0px 0px;
  width: 100px;
  height: 40px;
  position: absolute;
  top: -35px;
  right: 3px;
  z-index: 2;
`;

const Hat_b = styled.div`
  background-color: #e3e8e8;
  border-radius: 10%;
  width: 110px;
  height: 40px;
  z-index: 3;
  position: absolute;
  left: -110px;
`;

const Hat_c = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  right: -40px;
  top: -5px;
`;
const Hat_d = styled.div`
  background-color: #a11f05;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: absolute;
  top: -35px;
  right: -25px;
  z-index: 1;
`;

const Hat = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  left: 15%;
  bottom: 15%;
  top: 0px;
`;

const Face = styled.div`
  display: flex;
  flex-direction: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 150px;
  position: relative;
  top: 35px;
  z-index: 1;
`;

const Face_a = styled.div`
  background-color: #b58457;
  height: 45px;
  width: 90px;
`;

const Left_eye = styled.div`
  background-color: black;
  border-radius: 100%;
  height: 10px;
  width: 12px;
`;

const Right_eye = styled.div`
  background-color: black;
  border-radius: 100%;
  height: 10px;
  width: 12px;
`;

const Eye = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 10px;
`;
const Side = styled.div`
  display: flex;
  width: 150px;
  height: 43px;
  flex-direction: row;
`;
const X = styled.div`
  display: flex;
  width: 20px;
  height: 21px;
  background-color: #e0e0de;
  border-radius: 0 0 50% 50%;
`;

const Y = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: #78543d;
  border-radius: 100%;
`;

const Z = styled.div`
  display: flex;
  width: 20px;
  height: 22px;
  background-color: color;
  background-color: #e0e0de;
  border-radius: 100% 100% 0 0;
`;

const LeftSide = styled.div`
  display: flex;
  width: 150px;
  height: 43px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -9px;
  right: 10px;
  z-index: -1;
`;

const RightSide = styled.div`
  display: flex;
  width: 150px;
  height: 43px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -9px;
  left: 6px;
  z-index: -1;
`;

const Teeth = styled.div`
  height: 15px;
  width: 15px;
  background-color: white;
  position: relative;
  left: 38px;
  bottom: 10px;
  z-index: 2;
`;

const Mouth = styled.div`
  height: 30px;
  width: 50px;
  border-radius: 100% 100% 100% 100%;
  background-color: black;
  position: relative;
  left: 20px;
  bottom: 20px;
  z-index: 1;
`;

const Tongue = styled.div`
  background-color: #d1345b;
  border-radius: 100% 0% 50% 0%;
  height: 10px;
  width: 15px;
  position: relative;
  top: -30px;
  right: -50px;
  z-index: 2;
`;

const Beard = styled.div`
  display: flex;
`;

const Beard_a = styled.div`
  height: 30px;
  width: 20px;
  background-color: #d4d7d9;
  border-radius: 0% 0% 0% 100%;
  position: relative;
  transform: translateY(-15px);
  z-index: 1;
`;

const Beard_b = styled.div`
  height: 20px;
  width: 20px;
  background-color: #e3e6e8;
  border-radius: 0% 0% 100% 100%;
  position: relative;
`;
const Beard_c = styled.div`
  height: 30px;
  width: 20px;
  background-color: #d4d7d9;
  border-radius: 0% 0% 100% 0%;
  position: relative;
  transform: translateY(-15px);
  z-index: 1;
`;

const Beard_d = styled.div`
  height: ${(props) => props.height || "30px"};
  width: 22px;
  background-color: white;
  border-radius: 0% 0% 100% 100%;
  position: relative;
  z-index: -1;

  &:nth-child(1) {
    height: 25px;
    transform: translateY(-45px);
    right: -10px;
  }
  &:nth-child(2) {
    height: 28px;
    transform: translateY(-35px);
  }
  &:nth-child(3) {
    height: 30px;
    transform: translateY(-25px);
  }
  &:nth-child(4) {
    height: 28px;
    transform: translateY(-35px);
  }
  &:nth-child(5) {
    transform: translateY(-45px);
    right: 10px;
  }
`;

// const HeadWrapper = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
