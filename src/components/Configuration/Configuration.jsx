import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Nav, Tab } from "react-bootstrap";
import { useTheme } from "../../context/ThemeContext";
import "./Configuration.css";

const Configuration = () => {
  const { theme, changeTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("appearance");

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    changeTheme(selectedTheme);
  };

  return (
    <Container className="py-4 configuration-container">
      <h2 className="mb-4">Configuration</h2>     
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          {/* Left sidebar with configuration categories */}
          <Col md={3} lg={3} className="mb-4">
            <Card className="config-sidebar">
              <Card.Header>
                <h5 className="mb-0">Settings</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <Nav variant="pills" className="flex-column config-nav">
                  <Nav.Item>
                    <Nav.Link eventKey="appearance" className="config-nav-link">
                      <i className="fas fa-palette me-2"></i>
                      Appearance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="notifications" className="config-nav-link">
                      <i className="fas fa-bell me-2"></i>
                      Notifications
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="language" className="config-nav-link">
                      <i className="fas fa-language me-2"></i>
                      Language & Region
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="security" className="config-nav-link">
                      <i className="fas fa-shield-alt me-2"></i>
                      Security
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="advanced" className="config-nav-link">
                      <i className="fas fa-sliders-h me-2"></i>
                      Advanced
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          {/* Right content area with configuration options */}
          <Col md={9} lg={9}>
            <Tab.Content>
              {/* Appearance Tab */}
              <Tab.Pane eventKey="appearance">
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Theme Settings</h5>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Select Theme</Form.Label>
                        <Form.Select 
                          value={theme} 
                          onChange={handleThemeChange}
                          className="theme-select"
                        >
                          <option value="light">Light Theme</option>
                          <option value="dark">Dark Theme</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
                
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Layout Options</h5>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="compact-mode"
                          label="Compact Mode"
                          className="mb-2"
                        />
                        <Form.Text className="text-muted">
                          Reduces spacing between elements for a more compact view
                        </Form.Text>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="animations"
                          label="Enable Animations"
                          defaultChecked
                          className="mb-2"
                        />
                        <Form.Text className="text-muted">
                          Controls UI transition animations
                        </Form.Text>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Notifications Tab */}
              <Tab.Pane eventKey="notifications">
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Notification Preferences</h5>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-muted mb-4">Configure how and when you receive notifications</p>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="enable-notifications"
                          label="Enable Notifications"
                          defaultChecked
                          className="mb-2"
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Notification Sound</Form.Label>
                        <Form.Select className="mb-2">
                          <option value="default">Default</option>
                          <option value="chime">Chime</option>
                          <option value="bell">Bell</option>
                          <option value="none">None</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Language Tab */}
              <Tab.Pane eventKey="language">
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Language & Region Settings</h5>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Language</Form.Label>
                        <Form.Select className="mb-2">
                          <option value="en">English</option>
                          <option value="ar">Arabic</option>
                          <option value="fr">French</option>
                        </Form.Select>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Date Format</Form.Label>
                        <Form.Select className="mb-2">
                          <option value="mdy">MM/DD/YYYY</option>
                          <option value="dmy">DD/MM/YYYY</option>
                          <option value="ymd">YYYY/MM/DD</option>
                        </Form.Select>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Time Format</Form.Label>
                        <Form.Select className="mb-2">
                          <option value="12">12-hour (AM/PM)</option>
                          <option value="24">24-hour</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Security Tab */}
              <Tab.Pane eventKey="security">
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Security Settings</h5>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Label>Session Timeout</Form.Label>
                        <Form.Select className="mb-2">
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="120">2 hours</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                          Time of inactivity before automatic logout
                        </Form.Text>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="remember-login"
                          label="Remember Login"
                          defaultChecked
                          className="mb-2"
                        />
                        <Form.Text className="text-muted">
                          Keep you logged in between sessions
                        </Form.Text>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Advanced Tab */}
              <Tab.Pane eventKey="advanced">
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Advanced Settings</h5>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-muted mb-4">These settings are for advanced users</p>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Data Refresh Interval</Form.Label>
                        <Form.Select className="mb-2">
                          <option value="30">30 seconds</option>
                          <option value="60">1 minute</option>
                          <option value="300">5 minutes</option>
                          <option value="600">10 minutes</option>
                        </Form.Select>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="debug-mode"
                          label="Debug Mode"
                          className="mb-2"
                        />
                        <Form.Text className="text-muted">
                          Shows additional debugging information
                        </Form.Text>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="cache-data"
                          label="Cache Data"
                          defaultChecked
                          className="mb-2"
                        />
                        <Form.Text className="text-muted">
                          Store data locally for faster loading
                        </Form.Text>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Configuration;
