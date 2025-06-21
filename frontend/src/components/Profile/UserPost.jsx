import React, { useState } from 'react';
import FeedHeader from '../../components/Home/FeedHeader';
import FeedBody from '../../components/Home/FeedBody';
import FeedFooter from '../../components/Home/FeedFooter';
import PostSection from '../Home/PostSection';
import { assest } from '../../assets/assest';

const UserPost = () => {
    const initialPosts = [
        {
            id: 1,
            username: 'arshanto',
            name: 'Arshanto',
            time: '2 hours ago',
            text: 'আমার প্রথম পোস্ট! 🌟',
            image: assest.Story1,
        },
        {
            id: 2,
            username: 'arshanto',
            name: 'Arshanto',
            time: '1 day ago',
            text: 'who am i',
            image: assest.Story2,
        },
        {
            id: 3,
            username: 'arshanto',
            name: 'Arshanto',
            time: '1 day ago',
            text: 'who am i',
            image: assest.postImage,
        },
    ];

    const [posts, setPosts] = useState(initialPosts);
    const [loves, setLoves] = useState({});
    const [commentsOpen, setCommentsOpen] = useState({});

    const toggleLove = (postId) => {
        setLoves((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const toggleComment = (postId) => {
        setCommentsOpen((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    return (
        <div className="flex flex-col  mx-4 overflow-y-auto   ">

                <div>
                    <PostSection />
                </div>
        

            {/* Scrollable Post Section */}
            <div className="space-y-6 m-4 ">
                {posts.map((post) => (
                    <div key={post.id} className="p-5 bg-[#1f1f1f] rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <FeedHeader 
                            username={post.username} 
                            name={post.name} 
                            time={post.time} 
                        />
                        <FeedBody 
                            text={post.text} 
                            image={post.image}
                        />
                        <FeedFooter 
                            love={loves[post.id] || false}
                            changeLove={() => toggleLove(post.id)}
                            handleComment={() => toggleComment(post.id)}
                            showComment={commentsOpen[post.id] || false}
                            profile={assest.profile}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPost;
