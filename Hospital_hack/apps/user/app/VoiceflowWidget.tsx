"use client";

import { useEffect } from "react";
import Script from "next/script";

const VoiceflowWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadVoiceflow = async () => {
        // Wait for the script to load and initialize
        await new Promise<void>((resolve) => {
          const checkVoiceflow = () => {
            if (window.voiceflow) {
              resolve();
            } else {
              setTimeout(checkVoiceflow, 100);
            }
          };
          checkVoiceflow();
        });

        // Now we can safely use window.voiceflow
        window.voiceflow.chat.load({
          verify: { projectID: '66eaa5816031ae503eddc6ed' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
        });
      };

      loadVoiceflow();
    }
  }, []);

  return (
    <Script
      src="https://cdn.voiceflow.com/widget/bundle.mjs"
      type="module"
      strategy="afterInteractive"
    />
  );
};

export default VoiceflowWidget;
