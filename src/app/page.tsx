"use client";

import { ConfigProvider } from 'antd';
import ChmodCalculator from "@/components/ChmodCalculator";
import Link from "next/link";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#007aff',
          borderRadius: 12,
          controlHeight: 40,
          controlHeightLG: 48,
          controlHeightSM: 32,
          fontSize: 16,
          fontFamily: 'var(--font-mulish)',
        },
        components: {
          Card: {
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          },
          Button: {
            borderRadius: 8,
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
          },
          Input: {
            borderRadius: 8,
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          },
          Checkbox: {
            borderRadius: 6,
          }
        }
      }}
    >
      <div style={{ 
        minHeight: "100vh", 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        padding: "40px 20px"
      }}>
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
          <Link 
            href="https://github.com/yunfenglong/chmod-calculator" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '8px 16px', 
              background: 'rgba(0, 0, 0, 0.8)', 
              color: 'white', 
              borderRadius: '6px', 
              textDecoration: 'none', 
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </Link>
        </div>
        <ChmodCalculator />
      </div>
    </ConfigProvider>
  );
}
