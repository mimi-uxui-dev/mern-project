import React, { useState } from "react";
import Button from "../../../shared/components/FormElements/Button";
import Card from "../../../shared/components/UIElements/Card";
import Map from "../../../shared/components/UIElements/Map";
import Modal from "../../../shared/components/UIElements/Modal";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const openDeleteWarningHandler = () => setShowConfirmModal(true);
  const closDeleteWarningHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("Deleting...");
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={15} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={closDeleteWarningHandler}
        header={"Are you sure?"}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={closDeleteWarningHandler}>
              Close
            </Button>{" "}
            <Button onClick={confirmDeleteHandler} danger>
              DELETE
            </Button>{" "}
          </React.Fragment>
        }
      >
        <div className="map-container">
          <p>Do you want to preceed and delete this place?</p>
        </div>
      </Modal>
      <li className="place_item">
        <Card className="place-item__content">
          <div className="place_item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place_item__actions">
            <Button onClick={openMapHandler} inverse>
              View on Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger onClick={openDeleteWarningHandler}>
              delete
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
