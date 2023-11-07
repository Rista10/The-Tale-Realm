import './storyView.css'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import Book from '../../assets/images/book.png'
import React from 'react'
import MoreFromAuthor from '../../components/moreFromAuthor/moreFromAuthor'
import { Container } from 'react-bootstrap'
import CommentBox from '../../components/comment/comment'
import ShareReact from '../../components/shareAndReact/shareReact'
const StoryView = () => {
    return (
        <>
            <NavBar />
            <Container>
                <div className="read-content">
                    <section className="main-content">
                        <div className="read-content-head">
                            <div className="read-content-head-image">
                                <img src={Book} />
                            </div>
                            <div className="read-content-head-text">
                                <h2>The Magical Forest</h2>
                                <p>Rista Shrestha</p>
                                <p>2023-09-10</p>
                            </div>
                        </div>
                        <div className="read-content-body">
                            <p> Once upon a time, in a land far, far away, there was an enchanted forest known as the Whispering Woods. This mystical forest was unlike any other, for it was teeming with magic and wonder. The Whispering Woods got its name from the soft, melodic whispers of the trees, which seemed to carry secrets of the past and prophecies of the future.In the heart of the Whispering Woods, there lived a young girl named Elara. She was an orphan, left on the doorstep of a humble cottage inhabited by an elderly couple, Isabella and Oliver. They had raised her with love and care, and although Elara longed to know her true parents, she considered the elderly couple her family.
                                <br /><br />
                                Elara was different from the other children in the village. Her silver hair and luminous blue eyes set her apart, and the townsfolk believed she was touched by the magic of the Whispering Woods. She had a special gift – the ability to communicate with animals. She could understand the language of birds, the whispers of the trees, and even the secret conversations of the forest's magical creatures.One day, as Elara wandered deeper into the Whispering Woods, she stumbled upon a wounded unicorn. The magnificent creature was ensnared in a hunter's trap, and its eyes pleaded for help. Elara, without hesitation, approached the unicorn and used her gift to soothe the creature's pain. With gentleness and kindness, she freed the unicorn and earned its eternal gratitude.
                                <br /><br />
                                The unicorn, whose name was Luna, explained to Elara that an evil sorceress named Malina was planning to capture all the magical creatures of the Whispering Woods and drain them of their magic to gain ultimate power. Elara knew she had to do something to protect her beloved forest and all the magical creatures that called it home.With Luna's guidance, Elara embarked on a perilous quest. She sought the help of the wise old tree, Elder Oak, who bestowed upon her a special amulet that could harness the magic of the Whispering Woods. With this newfound power, Elara was ready to confront Malina.
                                <br /><br />
                                Their journey was fraught with danger and challenges, but Elara's determination and her bond with the creatures of the forest helped them overcome each obstacle. Along the way, they gathered allies in the form of mischievous fairies, wise owls, and gentle river spirits, each lending their unique abilities to the cause.Finally, they reached Malina's lair, a dark and foreboding castle nestled in the heart of the forest. Elara, her loyal unicorn Luna, and their newfound friends waged an epic battle against the sorceress. With the amulet's magic and the combined strength of the enchanted creatures, they managed to defeat Malina and seal her dark powers.
                                <br /><br />
                                The Whispering Woods celebrated their victory, and Elara, their true guardian, was hailed as a hero. The forest flourished, and its magic was preserved for generations to come.
                                <br /><br />
                                Elara had not only protected the enchanted forest but also found her true purpose. She realized that her unique gift was a blessing, and she had a family, not just in Isabella and Oliver, but in the magical creatures and the Whispering Woods itself.And so, in the Whispering Woods, the magic continued to whisper secrets of the past and prophecies of the future, and Elara, the forest's guardian, would forever be remembered in the tales of the enchanted forest.
                            </p>
                        </div>
                    </section>
                        <section className="side-content">
                            <MoreFromAuthor />
                            <ShareReact/>
                            <CommentBox/>
                        </section>
                </div>
            </Container>
            <Footer />

        </>
    )
}

export default StoryView