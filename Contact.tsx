import { useState } from 'react';
import { Layout } from './components/Layout';

function RadioButton({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button 
      onClick={onChange}
      className="radio-button"
    >
      <div className="radio-icon">
        <svg className="radio-svg" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill={checked ? "#3f3d3d" : "#D9D9D9"} r="9" />
          {checked && <circle cx="9" cy="9" fill="white" r="4" />}
        </svg>
      </div>
      <div className="radio-label">
        <p>{label}</p>
      </div>
    </button>
  );
}

function ContactForm() {
  const [inquiryType, setInquiryType] = useState<'consultation' | 'other'>('consultation');
  const [formData, setFormData] = useState({
    company: '',
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    phone: '',
    email: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { inquiryType, ...formData });
    alert('お問い合わせを送信しました（デモ）');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form-wrapper">
        <div className="contact-form-content">
          {/* Title */}
          <div id="main_frame3-1_text" className="contact-title-section">
            <p className="contact-title">
              CONTACT
            </p>
          </div>

          {/* Form Content */}
          <div className="contact-fields-wrapper">
            <div className="contact-fields-inner">
              {/* Form Header */}
              <div className="form-field">
                <p className="form-label" style={{ fontSize: '16px' }}>お問い合わせ内容を入力</p>
                <p className="form-label" style={{ fontSize: '16px' }}>※は必須項目です</p>
              </div>

              {/* Inquiry Type */}
              <div className="form-field radio-group">
                <p className="form-label">お問い合わせの内容※</p>
                <div className="inquiry-types">
                  <RadioButton 
                    checked={inquiryType === 'consultation'}
                    onChange={() => setInquiryType('consultation')}
                    label="新規お取引のご相談"
                  />
                  <RadioButton 
                    checked={inquiryType === 'other'}
                    onChange={() => setInquiryType('other')}
                    label="その他"
                  />
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="form-field">
                <p className="form-label">入力いただいた内容は、お問い合わせへの回答のみに使用いたします。</p>
              </div>

              {/* Company Name */}
              <div className="form-field">
                <p className="form-label">会社名</p>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="会社名"
                    className="form-input"
                    style={{ height: '50px' }}
                  />
                </div>
              </div>

              {/* Name */}
              <div className="form-field">
                <p className="form-label">お名前※</p>
                <div className="form-row">
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="姓"
                    className="form-input"
                  />
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="名"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Furigana */}
              <div className="form-field">
                <p className="form-label">フリガナ※</p>
                <div className="form-row">
                  <input
                    type="text"
                    required
                    value={formData.lastNameKana}
                    onChange={(e) => setFormData({ ...formData, lastNameKana: e.target.value })}
                    placeholder="セイ"
                    className="form-input"
                  />
                  <input
                    type="text"
                    required
                    value={formData.firstNameKana}
                    onChange={(e) => setFormData({ ...formData, firstNameKana: e.target.value })}
                    placeholder="メイ"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="form-field">
                <p className="form-label">電話番号※</p>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <p className="form-label">メールアドレス※</p>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Content */}
              <div className="form-field">
                <p className="form-label">内容※</p>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="form-textarea"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="submit-button"
            >
              <p className="submit-text">送信</p>
              <p className="submit-arrow">〉</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default function Contact({ onNavigate }: { onNavigate: (path: string, hash?: string) => void }) {
  return (
    <Layout onNavigate={onNavigate}>
      <div className="contact-main">
        <div className="contact-inner">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}
