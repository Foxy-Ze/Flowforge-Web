const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SubmitResponse {
  success: boolean;
  error?: string;
}

export const submitLead = async (leadData: LeadData): Promise<SubmitResponse> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit lead data.');
    }

    return { success: true };
    
  } catch (error: any) {
    console.error('Lead Service Error:', error);
    return { 
      success: false, 
      error: error.message || 'An unexpected error occurred.' 
    };
  }
};