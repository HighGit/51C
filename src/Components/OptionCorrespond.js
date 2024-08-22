import React from 'react';
import QuestionOption from './QuestionOption';
import ArticleOption from './ArticleOption';
import '../Styles/PostButton.css';

function OptionCorrespond({postType}) 
{
    return (
        <div>
            {/* Outcome Correspond Section */}
            <div>
                {postType === 'question' && (
                    <QuestionOption />       
                )}

                {postType === 'article' && (
                    <ArticleOption />
                )}
            </div>

            {/* Post Button */}
            <div>
                <button type = "submit"
                        className = "post-button"
                >Post</button>
            </div>
        </div>
    )
}

export default OptionCorrespond;