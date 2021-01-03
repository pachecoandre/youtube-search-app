import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Video from '../Video/Video'
import './Videos.css';

const Videos = (props) => {

  /* Pagination */
  const itemsPerPage = 10
  const [pageContent, setPageContent] = useState(props.videos)
  const [pageCount, setPageCount] = useState(1)
  const [pageIndex, setPageIndex] = useState(1)

  useEffect(() => {
    setPageCount(Math.ceil(props.videos.length / itemsPerPage))
    setPageContent(props.videos.slice((pageIndex - 1) * itemsPerPage, pageIndex * itemsPerPage))
  }, [pageIndex, props.videos])

  const changePage = (e, page) => {
    setPageIndex(page)
    setPageContent(props.videos.slice((pageIndex - 1) * itemsPerPage, pageIndex * itemsPerPage))
  }

  // material ui styling
  const useStyles = makeStyles((theme) => ({
    root: { '& > *': { marginTop: theme.spacing(2), }, },
  }))
  const classes = useStyles();


  if (!props.videos) return <div></div>

  return (
    <div className="videos">
      {pageContent.map((video, index) => <Video key={index} video={video} />)}
      <div className="pagination">
        <div className={classes.root}>
          <Pagination
            count={pageCount}
            onChange={changePage}
          />
        </div>
      </div>
    </div>
  );
}

export default Videos;
