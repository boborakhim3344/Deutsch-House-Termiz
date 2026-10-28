/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { RegistrationModal } from './components/RegistrationModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { LegalModal } from './components/LegalModal';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { Languages } from './pages/Languages';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Course, BlogPost } from './types';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerDefaults, setRegisterDefaults] = useState<{
    language: 'german' | 'english';
    format: 'offline' | 'online';
  }>({
    language: 'german',
    format: 'offline'
  });
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page !== 'blog') {
      setSelectedPost(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRegister = (course?: Course) => {
    if (course) {
      setRegisterDefaults({
        language: course.language,
        format: course.format
      });
    } else {
      setRegisterDefaults({
        language: 'german',
        format: 'offline'
      });
    }
    setIsRegisterOpen(true);
  };

  const handleSelectPostFromHome = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EFE4] text-[#1C1917] antialiased">
      {/* Floating Pill Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRegister={() => handleOpenRegister()}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onSelectPost={handleSelectPostFromHome}
            onOpenRegister={() => handleOpenRegister()}
          />
        )}

        {currentPage === 'courses' && (
          <Courses
            onSelectCourse={(course) => setSelectedCourse(course)}
            onOpenRegister={() => handleOpenRegister()}
          />
        )}

        {currentPage === 'languages' && (
          <Languages
            onNavigate={handleNavigate}
            onOpenRegister={() => handleOpenRegister()}
          />
        )}

        {currentPage === 'about' && (
          <About onOpenRegister={() => handleOpenRegister()} />
        )}

        {currentPage === 'blog' && (
          <Blog
            selectedPost={selectedPost}
            onSelectPost={(post) => setSelectedPost(post)}
            onOpenRegister={() => handleOpenRegister()}
          />
        )}

        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Footer matching Wayfare */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating Telegram and Phone quick contact button */}
      <QuickContactFloating />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultLanguage={registerDefaults.language}
        defaultFormat={registerDefaults.format}
      />

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onRegister={(c) => {
          setSelectedCourse(null);
          handleOpenRegister(c);
        }}
      />

      {/* Legal Modal (Privacy / Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
