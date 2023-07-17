/* eslint-disable react/prop-types */

export const Card = (props) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-item">
                    <p>{props.title}</p>
                    <p>{props.SubTitle}</p>
                    <p>{props.disc}</p>
                </div>
            </div>
        </div>
    );
}