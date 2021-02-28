import React, { Fragment, useState, useEffect } from "react";
import {useHistory, withRouter} from "react-router-dom";
import { Table, Tag, Space, Input, Row, Col, Modal, Form, message } from 'antd';
import {useSelector, useDispatch, connect} from 'react-redux';
import {Box} from '@material-ui/core'

import "./style.css";
import LeftEye from "./baseLeft";
import RightEye from "./baseRight";
import Ruler1 from "./ruler1";
import Ruler2 from "./ruler2";
import Ruler3 from "./ruler3";
import Ruler4 from "./ruler4";
import Ruler5 from "./ruler5";
import Ruler6 from "./ruler6";
import Axios from "axios";

import JsonData1 from '../layout/data/data_en.json';
import JsonData2 from '../layout/data/data_fr.json';
import JsonData3 from '../layout/data/data_it.json';
import JsonData4 from '../layout/data/data_pt.json';
import JsonData5 from '../layout/data/data_es.json';

var prev1 = "4";

const Tool = (props) => {
    const patient = useSelector(state => state.patient);
    const dispatch = useDispatch();
    const {match, auth} = props;
    let {id} = match.params;
    const history = useHistory()
    const [landingPageData, setLandingPageData] = useState(JsonData4);
    const {translateFlag} = useSelector(state => state.translator);
    const [renderFlag, setRenderFlag] = useState(true);
    const [data, setData] = useState();
    const [flag, setFlag] = useState(true);
    const [doctorPlan, setDoctorPlan] = useState();

    const getlandingPageData =(flag)=> {
      switch (flag){
        case "1" : 
          prev1 = "1";
          return setLandingPageData(JsonData1)
        case "2" : 
          prev1 = "2";
          return setLandingPageData(JsonData2)
        case "3" : 
          prev1 = "3";
          return setLandingPageData(JsonData3)
        case "4" : 
          prev1 = "4";
          return setLandingPageData(JsonData4)
        case "5" : 
          prev1 = "5";
          return setLandingPageData(JsonData5)
        default:
          return null;
      }
    }

    useEffect(()=>{
      dispatch({type: 'CHANGE_WIDTHLEFT', payload: "700px"});
      dispatch({type: 'CHANGE_WIDTHRIGHT', payload: "700px"});
      dispatch({type: 'CHANGE_WIDTHRULER1', payload: "180px"});
      dispatch({type: 'CHANGE_WIDTHRULER2', payload: "180px"});
      dispatch({type: 'CHANGE_WIDTHRULER3', payload: "180px"});
      dispatch({type: 'CHANGE_WIDTHRULER4', payload: "180px"});
      dispatch({type: 'CHANGE_WIDTHRULER5', payload: "180px"});
      dispatch({type: 'CHANGE_WIDTHRULER6', payload: "180px"});
    }, [])
  
    useEffect(()=>{
      if(prev1 !== translateFlag){
        console.log("I will sleep")
        getlandingPageData(translateFlag)
      }
      else{
        if(renderFlag){
          getlandingPageData(translateFlag);
          setRenderFlag(false)
        }
      }
      if(flag){
      Axios({
        method: "POST",
        url: "/api/patients/get-one-patient",
        data: {
          doctor: auth.user.id,
          patient: `uploads/patients/${id}/Left-Eye.jpg`
        }
      }).then(res=>{
        setFlag(false)
        const patient_temp = [];
        var imageState = '';
        res.data.map((patient,index)=>{
          if(patient.leftEye){
            if(patient.rightEye){
              imageState = "Left+Right";
            }
            else{
              imageState = "Left";
            }
          }
          else{
            if(patient.rightEye){
              imageState = "Right";
            }
            else{
              imageState = "No added Eye";
            }
          }
          patient_temp.push(
            {
              id: patient._id,
              key: index+1,
              name: patient.name,
              email: patient.email,
              contact: patient.contact,
              profession: patient.profession,
              gender: patient.gender,
              birthdate: patient.birthdate,
              reason: patient.reasonConsultation,
              take: patient.takeScan,
              have: patient.haveDisease,
              image: imageState,
              leftEye: patient.leftEye,
              rightEye: patient.rightEye
            }
          )
        })
        setData(patient_temp);

        Axios({
          method: "POST",
          url: "/api/users/get-one-user",
          data:{
            id: auth.user.id
          }
        }).then(res=>{
          console.log("doctor is ", res.data.membership2)
          if(res.data.membership2)
          setDoctorPlan("professional");
          else{
            if(res.data.membership1){
              setDoctorPlan("basic");
            }
            else
              setDoctorPlan("free");
          }
        })
      })
    }
    })
    

    const columns = [
      {
        title: landingPageData ? landingPageData.PatientTable.name : "loading",
        dataIndex: 'name',
        key: 'name',
        render: text => <em>{text}</em>,
      },
       {
        title: landingPageData ? landingPageData.PatientTable.email: "loading",
        dataIndex: 'email',
        key: 'email',
        render: text => <em>{text}</em>,
      },
       {
        title: landingPageData ? landingPageData.PatientTable.contact: "loading",
        dataIndex: 'contact',
        key: 'contact',
        render: text => <em>{text}</em>,
      },
       {
        title: landingPageData ? landingPageData.PatientTable.profession: "loading",
        dataIndex: 'profession',
        key: 'profession',
        render: text => <em>{text}</em>,
      },
       {
        title: landingPageData ? landingPageData.PatientTable.gender: "loading",
        dataIndex: 'gender',
        key: 'gender',
        render: text => <em>{text}</em>,
      },
       {
        title: landingPageData ? landingPageData.PatientTable.birthdate: "loading",
        dataIndex: 'birthdate',
        key: 'birthdate'
      },
      {
        title: landingPageData ? landingPageData.PatientTable.reason: "loading",
        dataIndex: 'reason',
        key: 'reason',
        render: text => <em>{text}</em>,
      },
      {
        title: landingPageData ? landingPageData.PatientTable.exam: "loading",
        dataIndex: 'take',
        key: 'take',
        render: text => <em>{text}</em>,
      },
      {
        title: landingPageData ? landingPageData.PatientTable.have: "loading",
        dataIndex: 'have',
        key: 'have',
        render: text => <em>{text}</em>,
      },
          {
        title: landingPageData ? landingPageData.PatientTable.eyeState: "loading",
        dataIndex: 'image',
        key: 'image',
        render: text => <em>{text}</em>,
      },
      {
        title: landingPageData ? landingPageData.PatientTable.action: "loading",
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            {/* <a onClick={() => {
              setEditProductState(true);
              setIdToUpdate(record.key);
              editProductForm.setFieldsValue({ name: data.filter(x => x.key === record.key)[0].name })
            }}>Edit</a> */}
            <a onClick={() => {
              onView(record.key);
            }}>{landingPageData ? landingPageData.PatientTable.viewMore: "loading"}</a>
          </Space>
        ),
      },
    ];

    const onView =()=>{
      console.log("ggreat")
      history.push(`/patient/view/${id}/consultant-info`)
    }

  return (
    <div>
    <Row style = {{paddingTop: "68px", display: "block", width: "100%"}}>
    <Table columns={columns} dataSource = {data} pagination = {false}/>
    </Row>
      <LeftEye
        top={200}
        left={50}
        width={700}
        height={700}
        rotateAngle={0}
      >
        <div className="content content1">
            <div style = {{textAlign: "center", fontFamily: "initial", fontSize: "30px", display: "block"}}>{landingPageData ? landingPageData.ToolPage.rightEye : "loading"}</div>
            <div>
                <img src = {`/uploads/patients/${id}/Right-Eye.jpg`} style = {{width: patient.widthLeft}} />
            </div>
        </div>
      </LeftEye>

      <RightEye
        top={200}
        left={1170}
        width={700}
        height={700}
        rotateAngle={0}
      >
        <div className="content content1">
            <div style = {{textAlign: "center", fontFamily: "initial", fontSize: "30px", display: "block"}}>{landingPageData ? landingPageData.ToolPage.leftEye : "loading"}</div>
            <div>
                <img src = {`/uploads/patients/${id}/Left-Eye.jpg`} style = {{width: patient.widthRight}} />
            </div>
        </div>
      </RightEye>
      {
        doctorPlan==="professional" ?
      <div>
      <Ruler1
        top={220}
        left={770}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler1.png" style = {{width: patient.widthRuler1}} />
        </div>
      </Ruler1>
      <Ruler2
        top={220}
        left={970}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler2.png" style = {{width: patient.widthRuler2}} />
        </div>
      </Ruler2>
      <Ruler3
        top={450}
        left={770}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler3.png" style = {{width: patient.widthRuler3}} />
        </div>
      </Ruler3>
      <Ruler4
        top={450}
        left={970}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler4.png" style = {{width: patient.widthRuler4}} />
        </div>
      </Ruler4>
      <Ruler5
        top={680}
        left={770}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler5.png" style = {{width: patient.widthRuler5}} />
        </div>
      </Ruler5>
      <Ruler6
        top={680}
        left={970}
        width={180}
        height={180}
        rotateAngle={0}
      >

        <div>
            <img src = "img/rulers/finalRuler6.png" style = {{width: patient.widthRuler6}} />
        </div>
      </Ruler6> 
      </div>:
      doctorPlan==="basic" ?
      <div>
      
      <Ruler1
        top={300}
        left={770}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler1.png" style = {{width: patient.widthRuler1}} />
        </div>
      </Ruler1>
      <Ruler3
        top={600}
        left={770}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler3.png" style = {{width: patient.widthRuler3}} />
        </div>
      </Ruler3>
      <Ruler4
        top={600}
        left={970}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler4.png" style = {{width: patient.widthRuler4}} />
        </div>
      </Ruler4>
      <Ruler5
        top={300}
        left={970}
        width={180}
        height={180}
        rotateAngle={0}
      >
        <div>
            <img src = "img/rulers/finalRuler5.png" style = {{width: patient.widthRuler5}} />
        </div>
      </Ruler5>
      </div>:
      <div>
        <Ruler4
          style = {{zIndex: "10"}}
          top={400}
          left={970}
          width={180}
          height={180}
          rotateAngle={0}
        >
          <div>
              <img src = "img/rulers/finalRuler1.png" style = {{width: patient.widthRuler4}} />
          </div>
        </Ruler4>
        <Ruler1
          top={400}
          left={770}
          width={180}
          height={180}
          rotateAngle={0}
        >
          <div>
              <img src = "img/rulers/finalRuler4.png" style = {{width: patient.widthRuler1}} />
          </div>
        </Ruler1>
      </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {  }
)(withRouter(Tool));
