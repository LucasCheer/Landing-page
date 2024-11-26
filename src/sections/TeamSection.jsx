import CardTeam from "../components/CardTeam"
import Title from "../components/Title"
import Button from "../components/Button"
import '../styles/sections/TeamSection.scss'    

const TeamSection = () => {
  return (
    <section className="team-section">
      <Title title='Team' text='Meet Our Dedicated Team of Digital Marketing Experts'/>
      <div className="card-team-container">
        <CardTeam name='John Doe' position='CEO' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget urna tristique pharetra.' />
        <CardTeam name='Jane Doe' position='COO' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget urna tristique pharetra.' />
        <CardTeam name='Bob Smith' position='CTO' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget urna tristique pharetra.' />
        <CardTeam name='Alice Johnson' position='CFO' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget urna tristique pharetra.' />
        <CardTeam name='Charlie Brown' position='CMO' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget urna tristique pharetra.' />
        <CardTeam name='Eve Williams' position='CIO' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget urna tristique pharetra.' />
      </div>
      <div className="button-container">
        <Button text='See all team' color='secundary' className='button-team'/>
      </div>
    </section>
  )
}

export default TeamSection
