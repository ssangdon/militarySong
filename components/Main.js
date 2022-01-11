import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import { Button } from "@material-ui/core";
import LoadingButton from "../components/LoadingButton";
import DatePicker from "react-datepicker";

const useStyles = makeStyles({
  pcButtonStyle: {
    marginTop: "30px",
  },
  mobileButtonStyle: {
    marginTop: "30px",
  },
  pcResultContainerStyle:{

  },
  mbResultContainerStyle:{
    border: "1px solid black",
    marginTop:"1px",
  },

});

const Main = () => {
  const classes = useStyles();
  const match = useMediaQuery("(max-width : 600px)");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([
    {
      id: "",
      years: "",
      months: "",
      days: "",
      title: "",
      singer: "",
    },
  ]);

  const selectYears = (e) => {
    setYears(e.target.value);
  };
  const selectMonths = (e) => {
    setMonths(e.target.value);
  };
  const selectDays = (e) => {
    setDays(e.target.value);
  };
  // useEffect(() => {
  //   console.log(loading);
  // },);

  const search = async () => {
    if (years == 0 || months == 0 || days == 0) {
      alert("날짜를 선택해주세요!");
    } else {
      setLoading(true);
      await axios
        .get("/songs", {
          params: {
            years: years,
            months: months,
            days: days,
          },
        })
        .then((res) => {
          setSongs([...res.data.post]);
          setLoading(false);
          setIsResult(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const reSearch = () =>{
    setIsResult(false);
    setLoading(false);
    setSongs([]);
  }
  return (
    <Grid container item justifyContent="center" alignItems="center" xs={12}>
      {isResult ? (
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          {songs.map((d, i) => (
            <Grid
              container
              item
              justifyContent="center"
              alignItems="center"
              xs={12}
              key={i}
              className={classes.mbResultContainerStyle}
            >
              <Grid item xs={12}>
                제목 : {d.title}
              </Grid>
              <Grid item xs={12}>
                가수 : {d.singer}
              </Grid>
              <Grid item xs={12}>
                발매일 : {d.months}월{d.days}일
              </Grid>
            </Grid>
          ))}
          <Grid>
            <Button
              className={
                match ? classes.mobileButtonStyle : classes.pcButtonStyle
              }
              variant="contained"
              onClick={reSearch}
            >
              다시 검색하기
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <FormControl style={{ width: "200px" }}>
            <InputLabel>입대년도를 선택하세요.</InputLabel>
            <Select onChange={selectYears} value={years}>
              <MenuItem value={2010}>2010년</MenuItem>
              <MenuItem value={2011}>2011년</MenuItem>
              <MenuItem value={2012}>2012년</MenuItem>
              <MenuItem value={2013}>2013년</MenuItem>
              <MenuItem value={2014}>2014년</MenuItem>
              <MenuItem value={2015}>2015년</MenuItem>
              <MenuItem value={2016}>2016년</MenuItem>
              <MenuItem value={2017}>2017년</MenuItem>
              <MenuItem value={2018}>2018년</MenuItem>
              <MenuItem value={2019}>2019년</MenuItem>
              <MenuItem value={2020}>2020년</MenuItem>
              <MenuItem value={2021}>2021년</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "200px" }}>
            <InputLabel>입대월을 선택하세요.</InputLabel>
            <Select onChange={selectMonths} value={months}>
              <MenuItem value={1}>1월</MenuItem>
              <MenuItem value={2}>2월</MenuItem>
              <MenuItem value={3}>3월</MenuItem>
              <MenuItem value={4}>4월</MenuItem>
              <MenuItem value={5}>5월</MenuItem>
              <MenuItem value={6}>6월</MenuItem>
              <MenuItem value={7}>7월</MenuItem>
              <MenuItem value={8}>8월</MenuItem>
              <MenuItem value={9}>9월</MenuItem>
              <MenuItem value={10}>10월</MenuItem>
              <MenuItem value={11}>11월</MenuItem>
              <MenuItem value={12}>12월</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "200px" }}>
            <InputLabel>입대일을 선택하세요.</InputLabel>
            <Select onChange={selectDays} value={days}>
              <MenuItem value={1}>1일</MenuItem>
              <MenuItem value={2}>2일</MenuItem>
              <MenuItem value={3}>3일</MenuItem>
              <MenuItem value={4}>4일</MenuItem>
              <MenuItem value={5}>5일</MenuItem>
              <MenuItem value={6}>6일</MenuItem>
              <MenuItem value={7}>7일</MenuItem>
              <MenuItem value={8}>8일</MenuItem>
              <MenuItem value={9}>9일</MenuItem>
              <MenuItem value={10}>10일</MenuItem>
              <MenuItem value={11}>11일</MenuItem>
              <MenuItem value={12}>12일</MenuItem>
              <MenuItem value={13}>13일</MenuItem>
              <MenuItem value={14}>14일</MenuItem>
              <MenuItem value={15}>15일</MenuItem>
              <MenuItem value={16}>16일</MenuItem>
              <MenuItem value={17}>17일</MenuItem>
              <MenuItem value={18}>18일</MenuItem>
              <MenuItem value={19}>19일</MenuItem>
              <MenuItem value={20}>20일</MenuItem>
              <MenuItem value={21}>21일</MenuItem>
              <MenuItem value={22}>22일</MenuItem>
              <MenuItem value={23}>23일</MenuItem>
              <MenuItem value={24}>24일</MenuItem>
              <MenuItem value={25}>25일</MenuItem>
              <MenuItem value={26}>26일</MenuItem>
              <MenuItem value={27}>27일</MenuItem>
              <MenuItem value={28}>28일</MenuItem>
              <MenuItem value={29}>29일</MenuItem>
              <MenuItem value={30}>30일</MenuItem>
              <MenuItem value={31}>31일</MenuItem>
            </Select>
          </FormControl>
          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            xs={12}
          >
            {loading ? (
              <LoadingButton />
            ) : (
              <Button
                className={
                  match ? classes.mobileButtonStyle : classes.pcButtonStyle
                }
                variant="contained"
                onClick={search}
              >
                검색하기
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Main;
