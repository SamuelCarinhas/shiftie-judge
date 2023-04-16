import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./ScrollableList.css"
import { Link } from "react-router-dom";

function ScrollableList(props) {
    const [dataSource, setDataSource] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        console.log("Initial")
        setDataSource(props.data)
    }, [])

    const fetchMoreData = () => {
        if (dataSource.length < 100) {
            console.log("Loading more data...")
            setDataSource(dataSource.concat(dataSource))
        } else {
            setHasMore(false);
        }
    }

    return(
        <InfiniteScroll 
            dataLength={dataSource.length} 
            next={fetchMoreData} 
            hasMore={hasMore}
            loader= {
                <p>Loading...</p>
            }
            scrollableTarget="content"
            className="scrollable"
        >
            {
                dataSource.map((item, index) => {
                    return (
                        <Link key={index} className="course-link" to="/teste">
                            {item.name}
                        </Link>
                    );
                })
            }
        </InfiniteScroll>
    );
}

export default ScrollableList;