import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Walks with Dheanna Tedja</title>
        <meta name="description" content="Dheanna's Farewell" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Walks with Dheanna Tedja</h1>

        <p className={styles.description}>
          Because Dheanna and I know that she’s leaving under weird
          circumstances, we had many walks and conversations about everything.
          Unpacking what it meant to be here, what it means to work on
          something, and what it means to be on a team. In those explorations, I
          transcribed notes that Dheanna and I wanted everyone to know and have.
        </p>

        <p className={styles.description}>
          I asked Dheanna what she’s going to remember the most about Erich and
          she told me about the story of their first meeting. It happened when
          Sabrina and Dheanna were trying to figure out the customer groups
          status for Schools and Groups and invited Erich for technical
          expertise. He was laughing the entire time in the meeting and Dheanna
          could not figure out “who was this funny guy” and what type of person
          he was. By the end of that same video conversation, led mostly by
          Dheanna and Sabrina, Erich chimed in that code update was done and he
          pushed the Schools and Group status onto the site. Dheanna couldn’t
          believe it. And we both smiled knowingly.
        </p>

        <p className={styles.description}>
          Dheanna told me that she’ll always remember how Erich “keeps things
          light, especially when it’s needed,” but what people soon realize is
          that “he’s actually always listening and analyzing” and “always
          reliable.” I told her that it was just who he is, always saving us and
          making sure all of this works. She nodded.
        </p>

        <p className={styles.description}>
          We naturally talked about Hammer next because Dheanna said that
          “Hammer is always reliable too.” I asked Dheanna what she would
          remember most about Hammer and Dheanna said Hammer is just “into
          everything she says she’s into.” That she hasn’t met many people who
          are knowledgeable about their interests like Hammer. It’s gotten to
          the point where Dheanna now associates the color green with Hammer
          when she randomly visits boutiques and other shops that have items in
          different color ways. I chuckled, joking to Dheanna that Hammer has
          transcended to one of the secondary colors on the color wheel for
          someone. We both laughed.
        </p>

        <p className={styles.description}>
          I also told Dheanna that we’re “so lucky that one of her interests is
          the craft and KiwiCo then.” Because we knew that Hammer would always
          be able to add to the stack and grow it in dedicated and hopeful ways.
          She nodded. We both knew that if we didn’t have Hammer, we would have
          lost the steadiness on the team as things changed. Her hardworking
          dedication can always be felt. The desire to be good at the craft,
          talking about it, and obsessing over it in the work, book clubs, and
          being academically minded over the years has been sustaining to me and
          Erich. It’s rare. Dheanna knew and smiled.
        </p>

        <p className={styles.description}>
          The next time we talked, I asked Dheanna what her first memory was of
          the team. Dheanna told me it was working with Rohan because he was the
          first developer she’s ever worked with. Ever. She always felt that he
          was so helpful and willing, teaching her what statuses on
          subscriptions meant that first time. Over time, Rohan was always
          helping Dheanna learn more SQL and our systems, helping her build the
          foundation to her understanding of KiwiCo. That helpful willingness
          never disappeared.
        </p>

        <p className={styles.description}>
          I asked Dheanna how that affected her time here and she told me that
          “it helped her get comfortable to learn from everyone else.” She
          realized that it was in the DNA of the team and that she should be
          comfortable with asking any of the developers for technical help. I
          smiled, telling her “that’s what being together is all about, isn’t
          it?” Dheanna quickly added “especially when there are fires.” And we
          laughed.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9wLda0GqeeY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <code className={styles.code}>
          For fighting the fires at KiwiCo from day 1.
        </code>

        <p className={styles.description}>
          When I asked Dheanna what she was going to remember from John the
          most, she told me she thought John is “always funny.” I wasn’t sure
          what she meant, so Dheanna described a moment that sticks out in her
          mind. It happened during one of the pod meetings when John asked Erich
          whether “cell phones existed and whether he had one when he was in
          school” and Emily was flabbergasted, responding with “What?!? Of
          course he did.” Dheanna chuckled and I shrugged. John’s unique lens of
          the world has brought some joy to our group.
        </p>

        <p className={styles.description}>
          Because we were talking about funny times on the team, Dheanna
          mentioned that Karen has given her many fun memories too. She noted
          that people only see the quiet part of Karen, but if you end up
          sitting next to her, Karen will notice things that you would not have
          guessed. There were times when Karen asked Dheanna whether she was
          interested in something now versus something else from the past
          because she noticed months before that Dheanna used to have artifacts
          laying around on her desk indicating otherwise. This surprised Dheanna
          every single time. Dheanna is happy knowing that Karen will integrate
          more with everyone over time.
        </p>

        <p className={styles.description}>
          She feels like people become part of a group when others account for
          what they would want without asking. I thought her sentiments were
          nice and told her so.
        </p>

        <p className={styles.description}>
          With Alfonso, Dheanna told me her first meetings with him were when
          she felt she had to integrate the most after Michael left. That was
          her trial by fire. In Alfonso, she found another mentor that would
          teach her the ropes so she could navigate all of those conversations
          with CS/Ops. She said she is “forever grateful” and “forever thankful”
          for Alfonso’s kindness during that time. Especially when Deposco
          failures were happening left and right when Alfonso was already
          pushing changes at all hours of the day and being contacted in the
          middle of the night constantly.
        </p>

        <p className={styles.description}>
          Dheanna hopes that the relationships between Digital Product and the
          rest of operations keeps getting better. It’s one of her regrets that
          she isn’t here longer to help bridge the gap more so that we’re making
          future roadmaps to plan better instead of tackling so many
          emergencies. I told her that we do the best that we can and that it
          was enough. It’ll be easier in the future when things settle even
          more.
        </p>

        <p className={styles.description}>
          Dheanna reflected, saying that at least there isn’t a “P0 every single
          day” like when she started. I nodded, knowing the end of a journey
          with a lot of our problems in sight. I’m still sad that she won’t be
          here to see it on the day we close up everything with Bill and Set 2,
          but I won’t forget to mention how much she helped. Still, I’m glad
          Alfonso pulled her through so many of the hard times.
        </p>

        <p className={styles.description}>
          When we talked about Manny, Dheanna felt she had seen him grow
          immensely from the beginning. Manny has always been thoughtful and
          polite, catching himself when he used to ask questions when he saw it
          on the spec already. But now, Manny is very on top of communications,
          being proactive because product managers need that from their seniors.
          She thinks he’s becoming really senior about owning the work, being
          what the team needs at this stage. I agree.
        </p>

        <p className={styles.description}>
          I noted a lot of positive signs, like how he cares about the systems
          and team members beyond his own PagerDuty shifts or stories,
          surprising us with how he’s always willing to lend a hand. Dheanna
          noted that “he doesn’t ever sweat anything though.” I agreed. We know
          the team is growing the right way when there’s people like Manny come
          out of our group to start pushing the team into new directions.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pBkHHoOIIn8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <code className={styles.code}>For saving Deposco with Alfonso.</code>

        <p className={styles.description}>
          At the mere mention of Janice’s name, Dheanna interjected with “she
          does everything!” I laughed. Dheanna mentions how there’s been so many
          times when she’s witnessed Janice come up with so many ideas on the
          spot, like the recent Podcast collaboration. A memory that will always
          stick with her with Janice was when Dheanna was working through the
          inventory interface. Janice noticed that she was frustrated, stepped
          over to ask what she was working on, and immediately began asking
          questions.
        </p>

        <p className={styles.description}>
          Within a few minutes, Janice put together a working mockup of exactly
          what Dheanna was thinking and the interface was perfect. Because of
          course that’s what happened. We both know that Janice is a lot of
          magic.
        </p>

        <p className={styles.description}>
          That reminded Dheanna of all of the times Yuli has come through for
          the team too. Dheanna mentioned how she thinks that they are so
          creative, possessing the ability to realize everything on the spot.
          Dheanna felt it through all of the gatherings, the celebrations, and
          the work. Dheanna told me that she definitely doesn’t have that, so
          when people are able to do it, it always impresses her. She hopes that
          she’s able to harness some of the creativity of Yuli and all of the
          people that work at KiwiCo so that she can build better roadmaps in
          the future. She also hopes that Yuli will get the opportunities to be
          in the more senior spaces because they’re already factoring how
          changes affect the systems and the people, protecting the team with
          what to look out for. Dheanna still wants to grow professionally and
          seeing her and Yuli go to the next steps in their career soon would be
          enough.
        </p>

        <p className={styles.description}>
          Dheanna thinks that Yuli is one of the best voices that care about the
          processes on our team. I agree, there’s some gaps there that we need
          to fill soon and I know Yuli will help us get there.
        </p>

        <p className={styles.description}>
          Speaking of processes, we immediately started about how Jeff has saved
          so many of our releases. Dheanna immediately added that she “trusts
          his judgment on the state of stories.” She recalls a time during Panda
          Plus, a day before release, when Rohan wanted to stop the entire
          release because of three outstanding bugs. Dheanna was really worried
          and wasn’t sure how to proceed given the expectations from all of the
          stakeholders. That’s when Jeff stepped in, calmly and methodically
          assessing the problems by working through it with Rohan and decided
          all of the bugs were P2, helping it get across the finish line. This
          is why Dheanna will always trust his judgment.
        </p>

        <p className={styles.description}>
          I asked her, “It was crazy before Jeff was here, wasn’t it?” And she
          nodded in the knowing.
        </p>

        <p className={styles.description}>
          When I asked Dheanna what she would remember the most about Iurii, she
          told me that Iurii is always so positive. “So positive that it
          balances out Jeff.” We laughed. She thinks that Iurii glues everyone
          together, noting how when everyone was coming back to the office, he
          contributed to the group by learning so many games and making sure
          people were having fun together. I told Dheanna that he’s been a
          friend to me through many of the struggles and the games, having
          fought so many battles already in such a short amount of time. She
          sees that.
        </p>

        <p className={styles.description}>
          Dheanna said that “Iurii always comes through no matter what.” I’m
          glad he glues us all together and as a group. His dedication and
          positivity represent the best of what our group is.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4Adfq6Lb0_I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <code className={styles.code}>
          For being a friend when the hard times were here.
        </code>

        <p className={styles.description}>
          Dheanna immediately added that another glue person on our team is Amy.
          She feels that “Amy is already so responsible,” following up and
          making sure that stories meet the actual needs of the users. When I
          asked what she meant by “responsible,” Dheanna responded with the fact
          that “Amy could be a PM with how consistent she is with communication”
          and that it was “rare with other engineers.” I shrugged and we
          laughed. I mused about how it takes an understanding of how actions
          affect others to be able to PM. That’s sometimes hard for many,
          because we don’t think about groups of people and the way we act in
          the same way we think about technical ecosystems and code. We should
          if we want to to be intentional. Seniority and leadership are constant
          small acts of intention and having more of it on the team only makes
          the whole more cohesive.
        </p>

        <p className={styles.description}>
          I told Dheanna that I agreed with her that Amy is another glue person.
          The future is brighter for the team because she’s here.
        </p>

        <p className={styles.description}>
          When I asked Dheanna what she would remember the most about Irene, she
          immediately said that she was “unstoppable.” Dheanna knows that Irene
          is determined and always able to see ten steps ahead. I asked her
          where she thinks that comes from and she explained that it’s probably
          because Irene used to be in the Product Management role, so she could
          always see what was needed and calculate the costs. Dheanna still
          remembers the times when Irene would surprise her, noting a particular
          instance when Irene said that “it would probably be a lot harder to
          add this development after launch because of additional costs of
          reworking this part of the infrastructure versus doing it upfront.”
          Dheanna always appreciated the understanding. And it made the work
          feel reasonable and pleasant even though Dheanna and Irene were
          pushing so many boulders together.
        </p>

        <p className={styles.description}>
          To Dheanna, having Irene was like having a second manager. She was so
          glad she could grow under her guidance.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DtVBCG6ThDk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <code className={styles.code}>
          For building out Education out with Irene and everyone on the team.
        </code>

        <p className={styles.description}>
          Dheanna is going to always remember Brittney as the “calm and rational
          one.” She told me that while Emily was stressed out outwardly and
          Dheanna was stressed out inwardly, Brittney always brought them back
          to the most reasonable next step. We laughed.
        </p>

        <p className={styles.description}>
          Dheanna admires Brittney for her ability to push for things that she
          feels needs to happen, even if she faces opposition. Because she
          weighs the risks calmly, Dheanna always feels like she’s able to win
          people over on the immediacy of the changes. I knew what she meant,
          Brittney is always so wise.
        </p>

        <p className={styles.description}>
          When I asked her what she’ll miss the most about KiwiCo, Dheanna told
          me that the routines and in-betweens are the things that she no longer
          has that will hurt the most. Her absolute favorite times at KiwiCo is
          when she is casually talking to Brittney and Emily, updating each
          other on timelines and occurrences throughout the day. I smiled.
          Belonging is an important feeling.
        </p>

        <p className={styles.description}>
          I asked Dheanna what she was going to most remember about Bill. She
          thought for a moment and then told me that he has that “cool boss
          vibe” and that he is always able to make things lighter. I laughed and
          had to investigate immediately. Dheanna waved her arms around
          frantically, saying “you know things will just work when Bill is
          around.” We talked about celebrations, meeting icebreakers, and just
          the way things are when Bill moves around the different groups and
          meetings. I smiled at Dheanna for being so funny.
        </p>

        <p className={styles.description}>
          She added that “when there are problems though, Bill is stern and to
          the point so that we figure out solutions immediately.” We are both
          glad that everyone is so efficient and that Bill always made sure
          things ran well.
        </p>

        <p className={styles.description}>
          Of course I wanted Dheanna’s impression of Sandra, so I asked. Dheanna
          said that Sandra is “so intense” and mentioned her very first
          impression was during the interview process. Sandra immediately asked
          her why she had a gap in-between jobs, investing what she was doing
          with all of her time, what she was hoping for, and why she wanted to
          be at KiwiCo now. Once she answered it adequately, Sandra went into
          another different mode. I laughed, feeling bad for Dheanna, but also
          relating.
        </p>

        <p className={styles.description}>
          Dheanna thinks the memory that will always stand out for her of Sandra
          is when she was getting the pop-up shop going. When signage on the
          upper levels needed to be done, Sandra immediately climbed up a ladder
          and started nailing it to the wall. She’s a leader by example. And
          it’s so easy to follow her. To believe.
        </p>

        <p className={styles.description}>
          All of our conversations always led back to Emily. It was amusing to
          me that it worked that way. Even though we kept taking tangents,
          talking about KiwiCo or other teammates, Emily was mentioned in some
          way. It reminds me that people become important in our lives when two
          individuals make the effort to really know each other. And that
          everything about a place has hints of them. It’s a little bit of
          togetherness magic that still exists when we choose to be important in
          each other’s lives. So when I asked Dheanna finally how she felt about
          Emily herself, there was a little bit of hesitation because the words
          couldn’t capture it. But we tried.
        </p>
        <p className={styles.description}>
          Dheanna told me that Emily doesn’t lead by sternness. Her leadership
          style is that of a “caring mentor, leading by example and experience.”
          Because of that, Dheanna always felt like they both came from the same
          place, and that she was able to make mistakes without judgment.
          Dheanna knew she was lucky.
        </p>
        <p className={styles.description}>
          A fun memory she has was finding out that they both grew up and
          obsessing over cash registers as a toy. We laughed. It explains their
          joy of organization.
        </p>
        <p className={styles.description}>
          I asked Dheanna what type of manager she would want to be and Dheanna
          told me that Emily “taught her what a good manager was” and that she
          would want to be like her. I asked her what would be hard for her as a
          manager and Dheanna said she would struggle being critical of
          someone’s work to help them grow, but she would hope that it’s
          something she learns. She knows all of that is in her future because
          the one thing that Dheanna wants to do from her time with being
          managed by Emily is to “pay it forward.” To one day be a leader like
          Emily is.
        </p>
        <p className={styles.description}>
          We smiled. The paths we take as humans are so interesting and so warm.
          You and Emily will always have this connection.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Oy1xOk-acps"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <code className={styles.code}>
          Because this makes me think of you and Emily.
        </code>
        <p className={styles.description}>
          Dheanna, I hope all of the words were said. I know you and the team
          didn’t need to hear (or read) any of this, but know that I needed to
          say it. Because no matter where you are, you are KiwiCo. And we won’t
          ever forget.
        </p>
      </main>
    </div>
  );
}
