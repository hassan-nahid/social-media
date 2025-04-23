import FeedShowSection from "./FeedShowSection"
import PostSection from "./PostSection"
import StorySection from "./StorySection"

const FeedSection = () => {
  return (
    <div className="w-full">
      {/* Story part */}
      <StorySection/>

      {/* post write part */}
      <PostSection/>

      {/* Feeding scrolling part */}

      <FeedShowSection/>
    </div>
  )
}

export default FeedSection