import { Card } from "react-bootstrap"

export default function Hhome() {
    return (
        <div className="container-fluid">
            <div className="row margin">
                <div className="col-3">
                    <Card>
                        <Card.Img variant="top" src="/images/lee-campbell-DtDlVpy-vvQ-unsplash.jpg" />
                         </Card>
                </div>
                <div className="col-3">
                    <Card>
                        <Card.Img variant="top" src="/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg" />
                    </Card>
                </div>
                <div className="col-3">
                    <Card>
                        <Card.Img variant="top" src="/images/neven-krcmarek-V4EOZj7g1gw-unsplash.jpg" />
                    </Card>
                </div>
                <div className="col-3">
                    <Card>
                        <Card.Img variant="top" src="/images/domenico-loia-hGV2TfOh0ns-unsplash.jpg" />

                    </Card>
                </div>
            </div>
        </div>
    )
}