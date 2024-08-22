import React from 'react';
import '../Styles/ShareSection.css';

function UserChoice({postType, setPostType})
{
    // Handling the event
    const handlePostTypeChange = (event) => {
        setPostType(event.target.value);
    };

    return (
        <div>

            <div className = "header">New Post</div>

            <br />
            <form>
                <div>

                    <label>Select Post Type: </label>
                    <input type = "radio"
                           value = "question"
                           checked = {postType === 'question'}
                           onChange = {handlePostTypeChange}
                    /> Question 
                    
                    &nbsp;&nbsp; {/* Spacing between elements */}

                    <input type = "radio"
                           value = "article"
                           checked = {postType === 'article'}
                           onChange = {handlePostTypeChange}
                    /> Article

                </div>
            </form>
            <br />

            <div className = "header">What do you want to ask or share</div>

            <div>

                <p>This section is designed based on the type of the post. It could be developed by conditional rendering.{' '}

                    {postType === 'question' && (
                        <span className = 'red-text'>For post a question, the following section would be appeared.</span>
                    )} 

                    {postType === 'article' && (
                        <span className = 'red-text'>For post an article, the following section would be appeared.</span>
                    )}
                </p>
            </div>

        </div>
    )
}

export default UserChoice;