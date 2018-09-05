import { connect } from 'react-redux';
import HomePage from 'PagesComponents/HomePage';
import { initData, setAnswer, sentAnswers } from 'Modules/research';
import Api from 'Api';

const mapStateToProps = (state) => {
    return {
        text: state.chat.text,
        fullName: state.user.description,
        loading: state.loading,
        research: state.research.questions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAnswer: (textObj, questionPos, answer) => {
            dispatch(setAnswer({
                questionPos: questionPos,
                answer: answer
            }));
            if (textObj[questionPos + 1]) {
                dispatch(initData(textObj[questionPos + 1]));
            }
        },
        sendAnswers: (research) => {
            Api.sendData(research)
                .then(() => {
                    dispatch(sentAnswers());
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);