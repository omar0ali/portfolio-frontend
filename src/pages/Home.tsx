import Toast from "../components/Toast";
import ListGroup from "../components/lists/ListGroup";
import Link from "../components/Link";
import Badge from "../components/Badge";
import { Colors } from "../components/Colors";
import { useEffect, useState } from "react";
import { getData } from "../API/APIConnection";
import AlertBox from "../components/AlertBox";
import Educations from "../API/Educations";

export default function Home() {
    const [dataEducation, setDataEducation] = useState<Educations>({
        count: 0,
        educations: [],
    });
    const [error, setError] = useState<string>("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData<Educations>("/educations");
                setDataEducation(response.data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <AlertBox
                closable={true}
                color={Colors.Danger}
                text={<>{error}</>}
                show={error ? error.length > 0 : false}
            ></AlertBox>
            <Toast
                content={
                    <>
                        <p>
                            You can download a pdf version of my resume from
                            this link
                        </p>
                        <Link
                            url="https://omar0ali.github.io/resume/assets/Omar-BaGunaid.pdf"
                            replaceWith="Omar-BaGunaid.pdf"
                        ></Link>
                    </>
                }
                title="Resume / CV"
                topRight="Omar BaGuniad"
                timer={10}
            ></Toast>
            <h1>Greetings</h1>
            <hr />
            <p style={{ textAlign: "justify" }}>
                My name is Omar BaGunaid, and I am a graduate student from York
                University with a bachelor's degree. I have a deep passion for
                coding to solve problems and am always eager to improve by
                making various projects, some are substantial, while others are
                smaller in scale. I cherish every moment spent on coding, and it
                has been an incredible journey of continuous learning. This
                whole journey has just made me crave more and more knowledge.
                Currently, my goal is to contribute to other open-source
                projects. Although it presents challenges, I am driven by the
                curiosity to explore what other people have created.
            </p>
            <div
                style={{ marginTop: "50px" }}
                className="container text-center"
            >
                <div className="row">
                    <div className="col">
                        <h2>Education</h2>
                        <div style={{ textAlign: "left" }}>
                            {dataEducation ? (
                                dataEducation.educations.map((item) => (
                                    <ListGroup
                                        clickable={false}
                                        key={item.id}
                                        items={[
                                            {
                                                text: (
                                                    <>
                                                        <h3>
                                                            {item.school_name}
                                                        </h3>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "14px",
                                                                fontStyle:
                                                                    "italic",
                                                            }}
                                                        >
                                                            {
                                                                item.school_address
                                                            }
                                                        </span>
                                                        <br />
                                                        <span>
                                                            {item.degree}
                                                        </span>
                                                        {Badge(
                                                            item.started_date,
                                                            Colors.Secondary,
                                                            "rounded"
                                                        )}{" "}
                                                        {Badge(
                                                            item.end_date,
                                                            Colors.Secondary,
                                                            "rounded"
                                                        )}
                                                    </>
                                                ),
                                            },
                                        ]}
                                    ></ListGroup>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <h2>Work Experience</h2>
                    </div>
                    <div className="col">
                        <h2>Projects</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
