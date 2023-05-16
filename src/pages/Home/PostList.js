import React from 'react';
import Meat from "./img/meat.jpg"
import { AiFillHeart, AiFillStar } from "react-icons/ai"
import "./index.css"
const PostList = () => {
  const numPosts = 5; // 欲重複撥放的次數

  return (
    <div>
      {[...Array(numPosts)].map((_, index) => (
        <div className="post" key={index}>
          <img src={Meat} alt="Meat" className='img' />
          <div className='article'>
            <span className='title'>示範標題:NO.{index + 1}</span>
            <p className='content'>示範貼文內容:帶著這些問題，我們來審視一下一塊豬肉。羅丹曾經講過，為了生活中努力發揮自己的作用，熱愛人生吧。這似乎非常的有道理，對吧？羅素·貝克告訴我們，一個人即使已登上頂峰，也仍要自強不息。這似乎非常的有道理，對吧？其實一塊豬肉是非常值得我們深思的。生活中，若一塊豬肉出現了，我們就不得不考慮它出現了的事實。一塊豬肉的意義其實就隱藏在我們的生活中，一塊豬肉，到底應該如何實現。伏爾泰有一句座右銘，不經巨大的困難，不會有偉大的事業。這似乎非常的有道理，對吧？你真的了解一塊豬肉嗎？在這種困難的抉擇下，本人思來想去，寢食難安。一塊豬肉因何而發生？愛因斯坦有一句座右銘，人的差異在於業餘時間。帶著這句話，我們還要更加慎重的審視這個問題：一塊豬肉真的是很值得探究，我認為，培根曾經講過，閱讀使人充實，會談使人敏捷，寫作使人精確。這啟發了我，一塊豬肉的發生，到底需要如何做到，不一塊豬肉的發生，又會如何產生。一塊豬肉，發生了會如何，不發生又會如何。吉姆·羅恩有說過，要麽你主宰生活，要麽你被生活主宰。我希望諸位也能好好地體會這句話。總結的來說，現在，解決一塊豬肉的問題，是非常非常重要的。 所以，所以說，查爾斯·史考伯告訴我們，一個人幾乎可以在任何他懷有無限熱忱的事情上成功。 這不禁令我深思。而這些並不是完全重要，更加重要的問題是，一般來說，至於為什麼要思考一塊豬肉呢？其實是有更深層的原因，那麽，問題的關鍵究竟為何？鄧拓曾經說過一句發人深省的話，越是沒有本領的就越加自命不凡。這果然是一句至理名言。{index + 1}</p>
          </div>
          <div className='icon'>
            <AiFillStar size={40} ></AiFillStar>
            <AiFillHeart size={40} ></AiFillHeart>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;