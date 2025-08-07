"use client";

import { useState } from "react";
import { Card, Row, Col, Checkbox, Input, Typography, Space, Divider, Tooltip, Button } from "antd";
import { Icon } from "@iconify/react";

const { Text } = Typography;

const permissionOptions = [
  { 
    label: "Read", 
    value: 4, 
    icon: "mdi:book-open-page-variant",
  },
  { 
    label: "Write", 
    value: 2, 
    icon: "mdi:pencil",
  },
  { 
    label: "Execute", 
    value: 1, 
    icon: "mdi:play-circle",
  }
];

const userTypes = [
  { 
    key: "owner", 
    label: "Owner (u)", 
    icon: "mdi:account",
    description: "The user who owns the file"
  },
  { 
    key: "group", 
    label: "Group (g)", 
    icon: "mdi:account-group",
    description: "The group that the owner belongs to"
  },
  { 
    key: "others", 
    label: "Others (o)", 
    icon: "mdi:earth",
    description: "All other users on the system"
  }
];

const ChmodCalculator = () => {
  const [owner, setOwner] = useState({ read: false, write: false, execute: false });
  const [group, setGroup] = useState({ read: false, write: false, execute: false });
  const [others, setOthers] = useState({ read: false, write: false, execute: false });

  const calculateOctal = () => {
    const ownerSum = (owner.read ? 4 : 0) + (owner.write ? 2 : 0) + (owner.execute ? 1 : 0);
    const groupSum = (group.read ? 4 : 0) + (group.write ? 2 : 0) + (group.execute ? 1 : 0);
    const othersSum = (others.read ? 4 : 0) + (others.write ? 2 : 0) + (others.execute ? 1 : 0);
    
    return `${ownerSum}${groupSum}${othersSum}`;
  };

  const calculateSymbolic = () => {
    const getPermission = (perms: { read: boolean; write: boolean; execute: boolean }) => {
      let perm = "";
      perm += perms.read ? "r" : "-";
      perm += perms.write ? "w" : "-";
      perm += perms.execute ? "x" : "-";
      return perm;
    };

    return `${getPermission(owner)}${getPermission(group)}${getPermission(others)}`;
  };

  const resetPermissions = () => {
    setOwner({ read: false, write: false, execute: false });
    setGroup({ read: false, write: false, execute: false });
    setOthers({ read: false, write: false, execute: false });
  };

  const handleOwnerChange = (key: string, value: boolean) => {
    setOwner({ ...owner, [key]: value });
  };

  const handleGroupChange = (key: string, value: boolean) => {
    setGroup({ ...group, [key]: value });
  };

  const handleOthersChange = (key: string, value: boolean) => {
    setOthers({ ...others, [key]: value });
  };

  return (
    <div style={{ 
      maxWidth: 900, 
      margin: "0 auto", 
      padding: "32px",
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)"
    }}>
      
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <Text style={{ 
          fontSize: "32px", 
          fontWeight: 700,
          color: '#1d1d1f',
          marginBottom: "8px",
          fontFamily: 'var(--font-mozilla-headline)'
        }}>
          Chmod Calculator
        </Text>
        <Text style={{ 
          fontSize: "16px", 
          color: '#86868b',
          fontFamily: 'var(--font-mulish)'
        }}>
          Calculate file permissions with ease
        </Text>
      </div>
      
      <Row gutter={[16, 16]}>
        {userTypes.map((userType) => (
          <Col xs={24} sm={8} key={userType.key}>
            <Card 
              size="small" 
              style={{
                borderLeft: `4px solid ${userType.key === 'owner' ? '#52c41a' : userType.key === 'group' ? '#1890ff' : '#faad14'}`
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                <Icon 
                  icon={userType.icon} 
                  style={{ fontSize: "24px", marginRight: "12px", color: '#1d1d1f' }}
                />
                <Text style={{ 
                  fontSize: "18px", 
                  fontWeight: 600,
                  color: '#1d1d1f',
                  fontFamily: 'var(--font-mozilla-headline)'
                }}>
                  {userType.label}
                </Text>
              </div>
              
              {permissionOptions.map((option) => {
                const isChecked = userType.key === 'owner' ? owner[option.label.toLowerCase() as keyof typeof owner] :
                               userType.key === 'group' ? group[option.label.toLowerCase() as keyof typeof group] :
                               others[option.label.toLowerCase() as keyof typeof others];
                
                return (
                  <Tooltip key={`${userType.key}-${option.label}`} placement="top">
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => {
                        if (userType.key === 'owner') handleOwnerChange(option.label.toLowerCase(), e.target.checked);
                        else if (userType.key === 'group') handleGroupChange(option.label.toLowerCase(), e.target.checked);
                        else handleOthersChange(option.label.toLowerCase(), e.target.checked);
                      }}
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid #e5e5e7",
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                        <Icon 
                          icon={option.icon} 
                          style={{ fontSize: "18px", color: '#1d1d1f', marginRight: "12px" }}
                        />
                        <Text style={{ fontWeight: 500, fontSize: "16px", fontFamily: 'var(--font-mulish)' }}>
                          {option.label}
                        </Text>
                        <Text style={{ fontSize: "12px", color: '#86868b', marginLeft: "8px", fontFamily: 'var(--font-mulish)' }}>
                          ({option.value})
                        </Text>
                      </div>
                    </Checkbox>
                  </Tooltip>
                );
              })}
            </Card>
          </Col>
        ))}
      </Row>

      <Divider />

      <Card style={{ 
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '16px'
      }}>
        <div style={{ 
          fontSize: '18px', 
          fontWeight: 600, 
          color: '#1f2937',
          marginBottom: '20px',
          textAlign: 'center',
          fontFamily: 'var(--font-mozilla-headline)'
        }}>
          Results
        </div>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div>
            <Text strong style={{ fontFamily: 'var(--font-mulish)' }}>Octal Notation:</Text>
            <Input 
              value={calculateOctal()} 
              readOnly 
              size="large"
              style={{ 
                fontSize: "28px", 
                fontWeight: 700, 
                textAlign: "center",
                marginTop: "8px",
                background: "white",
                border: "2px solid #e5e7eb",
                borderRadius: "12px",
                color: '#007aff',
                fontFamily: 'var(--font-mulish)'
              }}
            />
          </div>
          
          <div>
            <Text strong style={{ fontFamily: 'var(--font-mulish)' }}>Symbolic Notation:</Text>
            <Input 
              value={calculateSymbolic()} 
              readOnly 
              size="large"
              style={{ 
                fontSize: "28px", 
                fontWeight: 700, 
                textAlign: "center",
                marginTop: "8px",
                background: "white",
                border: "2px solid #e5e7eb",
                borderRadius: "12px",
                color: '#34c759',
                fontFamily: 'var(--font-mulish)'
              }}
            />
          </div>

          <div>
            <Text strong style={{ fontFamily: 'var(--font-mulish)' }}>Command:</Text>
            <Input 
              value={`chmod ${calculateOctal()} <file>`} 
              readOnly 
              style={{ 
                marginTop: "8px",
                background: "white",
                border: "2px solid #e5e7eb",
                borderRadius: "12px",
                fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
              }}
            />
          </div>
        </Space>
      </Card>

      <div style={{ 
        marginTop: "16px", 
        textAlign: "center",
        display: "flex",
        gap: "12px",
        justifyContent: "center"
      }}>
        <Button
          type="default"
          onClick={resetPermissions}
          style={{
            backgroundColor: '#ff3b30',
            borderColor: '#ff3b30',
            color: 'white',
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "10px",
            height: "48px",
            boxShadow: '0 2px 8px rgba(255, 59, 48, 0.3)',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#ff453a';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 59, 48, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ff3b30';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 59, 48, 0.3)';
          }}
          icon={<Icon icon="mdi:refresh" style={{ fontSize: '18px' }} />}
        >
          Reset
        </Button>
        
        <Button
          type="primary"
          onClick={() => {
            navigator.clipboard.writeText(calculateOctal());
          }}
          style={{
            backgroundColor: '#007aff',
            borderColor: '#007aff',
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "10px",
            height: "48px",
            boxShadow: '0 2px 8px rgba(0, 122, 255, 0.3)',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0081ff';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 122, 255, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007aff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 122, 255, 0.3)';
          }}
          icon={<Icon icon="mdi:content-copy" style={{ fontSize: '18px' }} />}
        >
          Copy Octal
        </Button>
      </div>

      <div style={{ 
        marginTop: "20px", 
        padding: "20px",
        background: '#f8f9fa',
        borderRadius: "12px",
        border: '1px solid #e9ecef',
        textAlign: "center"
      }}>
        <Text style={{ 
          fontSize: "14px", 
          color: '#6c757d',
          lineHeight: '1.5',
          fontFamily: 'var(--font-mulish)'
        }}>
          💡 Tip: chmod (change mode) is used to change file permissions in Unix-like systems.
          The octal notation is the most common way to set permissions.
        </Text>
      </div>
    </div>
  );
};

export default ChmodCalculator;