import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Video from '../Video/Video'
import './Videos.css';

const Videos = (props) => {

  const itemsPerPage = 2

  const [pageContent, setPageContent] = useState(props.videos)
  const [pageCount, setPageCount] = useState(1)
  const [pageIndex, setPageIndex] = useState(1)

  const getPageContent = (array) => array.slice((pageIndex - 1) * itemsPerPage, pageIndex * itemsPerPage)

  useEffect(() => {
    setPageCount(Math.ceil(props.videos.length / itemsPerPage))
    setPageContent(getPageContent(props.videos))
  }, [pageIndex])

  const changePage = (e, page) => {
    setPageIndex(page)
    setPageContent(getPageContent(props.videos))
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': { marginTop: theme.spacing(2), },
    },
  }))
  const classes = useStyles();

  if (!props.videos) return <div></div>

  return (
    <div className="videos">
      {pageContent.map((video, index) => <Video key={index} video={video} />)}
      <div className={classes.root}>
        <Pagination
          count={pageCount}
          onChange={changePage}
        />
      </div>
    </div>
  );
}

export default Videos;
