import React from "react";
import PageLayout from "../components/PageLayout";

export default function about() {
  return (
    <PageLayout type={"ABOUT"}>
      <div className="pageHeader">
        <div className="headerImg">
          <img src="About_Background2.jpg" width="100%" />
        </div>
        <div className="headerText">
          <h2>ABOUT COKEDAMA PLANTSCAPING</h2>
        </div>
      </div>
      <div className="aboutBanner">
        <div className="bannerContent">
          <img src="Floaters.jpg" width="50%" />
          <div className="bannerText">
            <h1>What is Kokedama?</h1>
            <p>
              Kokedama (苔玉, in English, literally "moss ball") is a ball of
              soil, covered with moss, on which an ornamental plant grows. (From
              Wikipedia) “K” of “ Kokedama” is replaced by “C” – Cokedama -
              “Cokedama”
            </p>
            <p>
              It's modern, sleek, natural, and unpretentious. It's kokedama.
              From the Japanese, loosely translated, 'koke' means moss and
              'dama' means ball. This is a free-form variant of traditional
              bonsai that is easy to try at home. Kokedama uses moss and string
              to contain plant roots, allowing plants to remain pot-free. Simple
              plants look amazing wrapped up in moss sheets and string, hung in
              windows, or perched in a shallow decorative dish. This is a great
              DIY that brings green inside.
            </p>
          </div>
        </div>
      </div>
      
      <div className="aboutGoal">
        <img src="https://www.cockburnlibraries.com.au/wp-content/uploads/2021/05/Kokedama-trio-scaled.jpg" width="45%" />
        <div className="goalHeader">
          <h2>Our Goal</h2>
        </div>
        <div className="goalContent">
          <p>
          To promote eco-friendly interior designing and inspire people to
            pursue careers working with plants while finding meaningful creative
            work to financially support them and their families.
          </p>
        </div>
      </div>

      <div className="vision-section">
        <h2>Our Company's Mission</h2>
        <div className="boxes">
          <div className="vision-box">
            <img src={"Awareness.png"} />
            <h2>Awareness</h2>
            <p>
              Create a favorable perception of interior plantscaping and
              increase awareness of careers working with plants.
            </p>
          </div>
          <div className="vision-box">
            <img src="Education.png" />
            <h2>Education</h2>
            <p>
              Engage and excite students and professionals in interior design
              fields about horticulture.
            </p>
          </div>
          <div className="vision-box">
            <img src="Empower.png" />
            <h2>Empowerment</h2>
            <p>
              Empower creative moms by creating and popularizing business
              opportunities.
            </p>
          </div>
          <div className="vision-box">
            <img src="Partnership.png" />
            <h2>Partnerships</h2>
            <p>
              Cultivate and strengthen partnerships and collaborations, while
              diversifying and broadening the base of advocates and supporters.
            </p>
          </div>
          <div className="vision-box">
            <img src="Eco Friendly.png" />
            <h2>Eco-Friendly</h2>
            <p>
              Popularize eco-friendly concepts in the interior design field by
              advocating the use of recycled materials.
            </p>
          </div>
          <div className="vision-box">
            <img src="Resource Dev.png" />
            <h2>Resource Development</h2>
            <p>
              Create educational resources such as plant databases, valuable
              tips, and guides for the community.
            </p>
          </div>
          <div className="vision-box">
            <img src="Workforce.png" />
            <h2>Workforce Developement</h2>
            <p>
              Increase the skilled workforce in plantscaping and develop a
              strong pipeline of future talent.
            </p>
          </div>
        </div>
      </div>


      {/* <div className="aboutStory">
        <img src="About_Kokedama_Plant.jpg" width="45%" />
        <div className="storyHeader">
          <h2>Our Story</h2>
        </div>
        <div className="storyContent">
          <p>
            There’s a blessing behind every challenge, a door of opportunity for
            each window that closes, a rainbow after the rain. During one of the
            most difficult time periods in my life, out of great despair, a
            little seed of an idea was born. The seed slowly grew to become a
            tiny plant, and Cokedama was born.
          </p>
          <p>
            Back in 2019, having resigned from a secure permanent job and after
            starting my own private practice as a chartered architect to be a
            better mom to my beautiful two babies, I’ve struggled to find work.
            As a stay-at-home parent earning half of her previous income, and
            juggling work and home life, taking care of two young kids, I found
            myself at a low point in no time. I was disappointed with myself and
            life. One day a friend visiting noticed a plant of Orchid at my
            house and she was asking me if i grow Orchids. At this time, I
            haven’t even planted anything on my own, the orchid plant wasn’t
            even mine as it was a gift from my mother-in-law and even though
            I’ve always admired and loved growing plants, I never really got a
            chance to perceive that dream. However, my husband overheard the
            conversation between me and my friend and he suggested why don’t you
            learn about growing orchids as you have some free time at your hands
            now.
          </p>
          <p>
            I went for training on growing orchids, anthuriums, and ornamental
            plants. This suddenly sparked a fire inside me to learn more and
            more about these subjects, me and my husband and I both kept
            learning, researching, and growing plants. When I discovered this
            old-turned-new technique called Kokedama for displaying houseplants,
            my life changed overnight. We even bought a little land plot away
            from the city in a beautiful area called Balangoda, to grow plants.
            The first time we visited our newly bought land, I spotted some
            snake plants that were plucked and were just lying there and I
            brought them home. I made my first Kokedama plant ball from that
            snake plant and I still have it with me. So that was the beginning
            of Cokedama Interior Plantscaping. In the times of lockdowns and
            travel restrictions in the years 2020 - 2021, I kept doing my
            research and growing and experimenting with my plants. I was very
            grateful I had found this to keep me busy during these troubled
            times.
          </p>
          <p>
            Since I was immensely inspired by this plant media, I used the same
            research for my dissertation submission to become a chartered
            landscape architect. Something I’ve experienced as a child with my
            mother, and me as a mom, and among many of my friends is that there
            are lots of well-educated women in our society that find themselves
            without much inspiration and financial freedom while taking care of
            their children and families. These women represent a large portion
            of our society and these are the people that can do creative,
            meaningful work to support their families financially, while having
            a stable income that empowers them to feel important even though
            they are staying home looking after the kids. So with my business, I
            want to support these women, I want to empower moms, and create a
            platform for them to learn, find inspiration, and sell their
            creations.
          </p>
          <p>
            Right now, I’m very excited and hopeful about my little business and
            I will carry on making beautiful cute plants that not only bring you
            joy but also make a difference in many other lives. Now I know that
            sometimes, what seems to be bitter trials in life, turns into
            blessings in disguise. I hope my story inspires you too.
          </p>
        </div>
      </div> */}
    </PageLayout>
  );
}
