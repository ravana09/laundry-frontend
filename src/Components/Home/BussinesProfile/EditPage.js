import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  Row,
} from "react-bootstrap";


function getMediaType(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (["jpg", "jpeg", "png", "bmp"].includes(extension)) return "image";
  if (["gif"].includes(extension)) return "gif";
  if (["mp4", "webm", "ogg"].includes(extension)) return "video";
  return "unknown";
}




function EditPage({formData,setFormData,setIsEditing} ) {
   
    const [isLeaveChecked, setIsLeaveChecked] = useState(false);
    const [selectedDay, setSelectedDay] = useState("");

    const [formDataCopy, setFormDataCopy] = useState(formData);
    
    const handleSave = () => {
      setFormData(formDataCopy);
      setIsEditing(false);
    };

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormDataCopy((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
  
    const handleCancel = () => {
      setFormDataCopy(formData);
      setIsEditing(false);
    };
  
    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      const newMedia = files.map((file) => ({
        file,
        type: getMediaType(file),
      }));
  
      setFormData((prev) => ({
        ...prev,
        media: [...prev.media, ...newMedia],
      }));
    };
  
  
  
    const handleImageDelete = (index) => {
      setFormData((prev) => ({
        ...prev,
        media: prev.media.filter((_, i) => i !== index),
      }));
    };
  
    const handleCheckboxChange = () => {
      setIsLeaveChecked(!isLeaveChecked);
      setSelectedDay(""); // Reset selected day when checkbox is toggled
    };
  
    const handleSelect = (eventKey) => {
      setSelectedDay(eventKey);
      setFormDataCopy((prev) => ({
        ...prev,
        selectedDay: eventKey,
      }));
    };
  

   
  return (
    <div style={{ borderRadius: "0px" }}>
    <Form
      className="BEditPage-Company-Form"
      style={{ padding: "20px", borderRadius: "0px" }}
    >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Company Name
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="name"
            value={formDataCopy.name}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          About Company
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="description"
            value={formDataCopy.description}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Address
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="address"
            value={formDataCopy.address}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Contact
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="contact"
            value={formDataCopy.contact}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Gst No
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="GstNo"
            value={formDataCopy.GstNo}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Official Website
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="website"
            value={formDataCopy.website}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Year of Establishment
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="yearOfEstablishment"
            value={formDataCopy.yearOfEstablishment}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      {/* Weekdays Timing */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Weekdays Timing
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="time"
            name="weekdaysStartTime"
            value={formDataCopy.weekdaysStartTime}
            onChange={handleChange}
          />
        </Col>
        <Col sm={4}>
          <Form.Control
            type="time"
            name="weekdaysEndTime"
            value={formDataCopy.weekdaysEndTime}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={4}>
          <Form.Check
            type="checkbox"
            label="Any leave in weekdays?"
            checked={isLeaveChecked}
            onChange={handleCheckboxChange}
          />
        </Col>
        <Col sm={4}>
          {isLeaveChecked && (
            <DropdownButton
              id="dropdown-weekday-selector"
              title={selectedDay ? selectedDay : "Select a day"}
              onSelect={handleSelect}
              className="mt-2"
            >
              <Dropdown.Item eventKey="Monday">
                Monday
              </Dropdown.Item>
              <Dropdown.Item eventKey="Tuesday">
                Tuesday
              </Dropdown.Item>
              <Dropdown.Item eventKey="Wednesday">
                Wednesday
              </Dropdown.Item>
              <Dropdown.Item eventKey="Thursday">
                Thursday
              </Dropdown.Item>
              <Dropdown.Item eventKey="Friday">
                Friday
              </Dropdown.Item>
            </DropdownButton>
          )}
        </Col>
      </Form.Group>

      {/* Saturday Timing */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Saturday Timing
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="time"
            name="saturdayStartTime"
            value={formDataCopy.saturdayStartTime}
            onChange={handleChange}
          />
        </Col>
        <Col sm={4}>
          <Form.Control
            type="time"
            name="saturdayEndTime"
            value={formDataCopy.saturdayEndTime}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      {/* Sunday Timing */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Sunday Timing
        </Form.Label>
        <Col sm={2}>
          <Form.Check
            type="checkbox"
            label="Leave"
            name="sundayLeave"
            checked={formDataCopy.sundayLeave}
            onChange={handleChange}
          />
        </Col>
        <Col sm={3}>
          <Form.Control
            type="time"
            name="sundayStartTime"
            value={formDataCopy.sundayStartTime}
            onChange={handleChange}
            disabled={formDataCopy.sundayLeave} // Disable input if "Leave" is checked
          />
        </Col>
        <Col sm={3}>
          <Form.Control
            type="time"
            name="sundayEndTime"
            value={formDataCopy.sundayEndTime}
            onChange={handleChange}
            disabled={formDataCopy.sundayLeave} // Disable input if "Leave" is checked
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Instagram URL
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="url"
            name="instagram"
            value={formDataCopy.instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/yourprofile"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Twitter URL
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="url"
            name="twitter"
            value={formDataCopy.twitter}
            onChange={handleChange}
            placeholder="https://twitter.com/yourprofile"
          />
        </Col>
      </Form.Group>
      <div>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Upload Media (Images)
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Upload Media (Videos)
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="file"
              accept="video/*"
              multiple
              onChange={handleImageChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Media Preview
          </Form.Label>
          <Col sm={8}>
            <div className="media-preview">
              {formData.media?.map((mediaItem, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                >
                  {mediaItem.type === "image" ||
                  mediaItem.type === "gif" ? (
                    <img
                      src={
                        mediaItem.file
                          ? URL.createObjectURL(mediaItem.file)
                          : mediaItem
                      } // Handle file and URL cases
                      alt={`Media ${index + 1}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <video
                      src={
                        mediaItem.file
                          ? URL.createObjectURL(mediaItem.file)
                          : mediaItem
                      } // Handle file and URL cases
                      controls
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        // border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                  <button
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      borderRadius: "50%",
                      padding: "0.2rem 0.5rem",
                      fontSize: "0.75rem",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageDelete(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </Col>
        </Form.Group>
      </div>

      <Button
        variant="primary"
        onClick={handleSave}
        className="me-2"
      >
        Save
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </Form>
  </div>
  )
}

export default EditPage