import Text from "../../components/Text/Text";
import styles from "./objective.module.css"; // Assuming you're using CSS Modules
import image1 from "../../assets/whatWeOffer.gif";
import Card from "../../components/Card/Card";
import icon from "../../assets/check.svg";
import objective1 from "../../assets/consulting-services.gif";
import cloudServices2 from "../../assets/CloudServices.gif";
import transformation1 from "../../assets/Digital-Transformation.gif";
import graph from "../../assets/graph-up-arrow.svg";
import pc from "../../assets/pc-display-horizontal.svg";
import command from "../../assets/command.svg";
import stack from "../../assets/stack.svg";
import settings from "../../assets/gear.svg";

const ObjectivePage = () => {
  return (
    <div className={styles.mainContainer}>
    	<div className={styles.textContent}>
        	<p style={{fontSize:'1.9rem', color:'#3f4141',fontWeight:'500'}}>What We Offer</p>
        	<p style={{fontSize:'1rem', color:'#3f4141', marginTop:'-30px'}}>We offer the following key services to simplify and reshape your business</p>
      	</div>

{/* --------------------------------container 1--------------------------------- */}
    	<div className={styles.container1}>
		<div className={styles.imageContainer}>
        <img
          	src={image1}
          	alt="what we offer"
        />
      	</div>
        	<div className={styles.cardContainer}>
        		<Card
            		text={"Project Management"}
            		textColor={"darkblue"}
            		textSize={"1.1rem"}
            		cardColor={"lightgrey"}
            		cardHeight={"3rem"}
            		cardWidth={"17rem"}
            		icon={icon}
          		/>
				<Card
            		text={"IT Service Delivery"}
            		textColor={"darkblue"}
            		textSize={"1.1rem"}
            		cardColor={"lightgrey"}
            		cardHeight={"3rem"}
            		cardWidth={"17rem"}
            		icon={icon}
          		/>
        		<Card
            		text={"Training and BootCamps"}
            		textColor={"darkblue"}
            		textSize={"1.1rem"}
            		cardColor={"lightgrey"}
            		cardHeight={"3rem"}
            		cardWidth={"17rem"}
            		icon={icon}
          		/>
        		
        	</div>
    	</div>

{/* --------------------------------container 2--------------------------------- */}
	<div className={styles.container2}>
    	<div className={styles.content2}>
        	<p className={styles.heading}>Strategy and Consulting</p>
        	<p className={styles.text}>
            	We will help you put your best foot forward in your IT Roadmap journey because if 
				you do not know where you are going, you will end up nowhere.
				Our team of professionals can help you lay out the roadmap for your IT transformation.
				Our assessments and road maps provide a holistic view of your existing IT capabilities and 
				provide the direction you need to take to get closer to your transformational goals and 
				operate with high efficiency.
        	</p>
    	</div>
    	<div className={styles.imageContainer2}>
        	<img
            	src={objective1}
            	alt="strategy"
            	className={styles.responsiveImage2}
        	/>
    	</div>
	</div>

{/* --------------------------------container 3--------------------------------- */}
	<div className={styles.container3}>
    	<div className={styles.imageContainer3}>
        	<img src={cloudServices2} width={"500px"} height={"350px"} alt="cloudService" />
    	</div>

    	<div className={styles.content3}>
        	<p className={styles.heading}>Cloud Services</p>
        	<p className={styles.paragraph}>
            	Cloud Infrastructure helps organizations to quickly achieve 
            	the game-changing capabilities and performance needed,
            	but every journey to the cloud is as unique as the organization making it. 
            	Organizations need expert guidance and road map to steer the right course and
            	our team of professionals can assist with the transition to cloud.
            	Be it Cloud Adoption and Cloud Migration,
            	we are there to help in your journey. Did you know that 90% of enterprises
            	in some form have adopted cloud?
        	</p>
        	<Text
            	text="Cloud is an Enabler of advanced digital technologies which leads to new business models and improved work force."
            	icon={icon}
            	size={"0.9rem"}
        	/>
        	<Text
            	text="Hiring a Cloud Managed Services team for your transformation helps mitigate the risks involved when migrating the workloads to Cloud. A Managed Services team will strategically map out your journey to Cloud while Cutting down your OpEX and CapEX."
            	icon={icon}
            	size={"0.9rem"}
        	/>
        	<Text
            	text="Leverage the opportunity to shift to the cloud. This increases your chances of survival and thrive in this digital era."
            	icon={icon}
            	size={"0.9rem"}
        	/>
    	</div>
	</div>

{/* ------------------------------------------- container 4 ---------------------------------------------- */ }
	<div>
    	<p style={{ fontSize: '1.8rem', color: 'darkblue', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px'}}>
        	Why Managed Cloud Services Team for your digital Transformation?
    	</p>
    	<div className={styles.container4}>
        	<div className={styles.imageTransformation}>
            	<img src={transformation1} alt="transformation" />
        	</div>
        	<div className={styles.transformation}>
            	<div className={styles.transformationColumn}>
                	<Text text={"Proven Migration Strategy"} icon={graph} color={"grey"} />
                	<Text text={"Maximizes value & ROI"} icon={pc} color={"grey"} />
                	<Text text={"Improves Business Continuity and Disaster Recovery Capability"} icon={command} color={"grey"} />
            	</div>
            	<div className={styles.transformationColumn}>
                	<Text text={"Re-architect for Speed, Agility & Security"} icon={stack} color={"grey"} />
                	<Text text={"Optimizes Performance"} icon={settings} color={"grey"} />
            	</div>
        	</div>
    	</div>
	</div>

    </div>
  );
};

export default ObjectivePage;
