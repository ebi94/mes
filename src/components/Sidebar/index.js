import React from 'react';
import { 
  Accordion,
  Card,
  Col, 
  Row }
from 'react-bootstrap';
import { FiPlayCircle } from 'react-icons/fi';
import { IoMdLock } from 'react-icons/io';
import { BsChevronDown, BsFillStarFill } from 'react-icons/bs';
import { FaFileAlt } from 'react-icons/fa'
import './Styles.css';

const Navbar = () => {
  return (
    <Row className="sidebar">
        <Col md={12} className="sidebar-item">
          <h4>Desain Grafis Untuk pemula</h4>
        </Col>
        <Col md={12} className="sidebar-item">
          <Row>
            <Col md={5}>
              <span className="sidebar-title-text">Konten Kelas</span>
            </Col>
            <Col md={7}>
              <span className="sidebar-text">4 Materi | Total durasi 10 min</span>
            </Col>
          </Row>
        </Col>
        <Col md={12} className="sidebar-item">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header className="ch-custom">
                <span className="sidebar-title-text">Perkenalan</span>
                <Accordion.Toggle eventKey="0" className="icon-toggle">
                  <BsChevronDown />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="cb-custom">
                  <div className="cb-item">
                    <FiPlayCircle />
                    <span className="sidebar-text accordion-text">Form & Space</span>
                    <span className="sidebar-text accordion-time">05:00</span>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={12} className="sidebar-item">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header className="ch-custom">
                <span className="sidebar-title-text">Konsep Dasar Desain Grafis</span>
                <Accordion.Toggle eventKey="0" className="icon-toggle">
                  <BsChevronDown />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="cb-custom">
                <div className="cb-item">
                  <IoMdLock />
                  <span className="sidebar-text accordion-text">Garis</span>
                  <span className="sidebar-text accordion-time">02:30</span>
                </div>
                <div className="cb-item-active">
                  <IoMdLock />
                  <span className="sidebar-text accordion-text">Form & Space</span>
                  <span className="sidebar-text accordion-time">05:00</span>
                </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={12} className="sidebar-item">
          <Accordion>
            <Card>
              <Card.Header className="ch-custom">
                <span className="sidebar-title-text">Pengertian Mengenai Komposisi</span>
                <Accordion.Toggle eventKey="0" className="icon-toggle">
                  <BsChevronDown />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="cb-custom">
                  <FiPlayCircle />
                  <span className="sidebar-text accordion-text">Form & Space</span>
                  <span className="sidebar-text accordion-time">05:00</span>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={12} className="sidebar-item">
          <Accordion>
            <Card>
              <Card.Header className="ch-custom">
                <span className="sidebar-title-text">Penggunaan Warna</span>
                <Accordion.Toggle eventKey="0" className="icon-toggle">
                  <BsChevronDown />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="cb-custom">
                  <FiPlayCircle />
                  <span className="sidebar-text accordion-text">Form & Space</span>
                  <span className="sidebar-text accordion-time">05:00</span>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={12} className="sidebar-item">
          <Accordion>
            <Card>
              <Card.Header className="ch-custom">
                <span className="sidebar-title-text">Assignment</span>
                <Accordion.Toggle eventKey="0" className="icon-toggle">
                  <BsChevronDown />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="cb-custom">
                  <FiPlayCircle />
                  <span className="sidebar-text accordion-text">Form & Space</span>
                  <span className="sidebar-text accordion-time">05:00</span>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={12} className="sidebar-item">
          <Accordion>
            <Card>
              <Card.Header className="ch-custom">
                <BsFillStarFill className="ac-icon"/>
                <span className="title-text-icon">Rating dan Ulasan</span>
                <Accordion.Toggle eventKey="0" className="icon-toggle">
                  <BsChevronDown />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="cb-custom">
                  <FiPlayCircle />
                  <span className="sidebar-text accordion-text">Form & Space</span>
                  <span className="sidebar-text accordion-time">05:00</span>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={12} className="sidebar-item">
          <Accordion>
            <Card>
              <Card.Header className="ch-custom">
                <FaFileAlt className="ac-icon"/>
                <span className="title-text-icon">Exam</span>
                <Accordion.Toggle eventKey="0" className="icon-toggle">
                  <BsChevronDown />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="cb-custom">
                  <FiPlayCircle />
                  <span className="sidebar-text accordion-text">Form & Space</span>
                  <span className="sidebar-text accordion-time">05:00</span>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
    </Row>
  );
}

export default Navbar;
