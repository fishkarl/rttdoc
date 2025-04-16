// 多语言支持模块

// 语言资源文件
const translations = {
    'zh-CN': {
        // 导航菜单
        'nav_home': '首页',
        'nav_architecture': '技术架构',
        'nav_best_practices': '最佳实践',
        'nav_examples': '示例代码',
        
        // 首页内容
        'welcome_title': '欢迎访问技术架构与最佳实践文档',
        'welcome_desc': '本文档提供了详细的技术架构说明和开发最佳实践指南，帮助开发团队构建高质量的应用程序。',
        'architecture_card_title': '技术架构',
        'architecture_card_desc': '了解我们推荐的技术架构模式、组件设计和系统集成方案。',
        'best_practices_card_title': '最佳实践',
        'best_practices_card_desc': '探索编码规范、性能优化、安全措施和测试策略等最佳实践。',
        'examples_card_title': '示例代码',
        'examples_card_desc': '通过实际的代码示例学习如何应用这些架构和最佳实践。',
        'view_details': '查看详情',
        'footer_copyright': '© 2023 技术架构与最佳实践文档。保留所有权利。',
        
        // 页面标题
        'site_title': '技术架构与最佳实践',
        'architecture_title': '技术架构 - 技术架构与最佳实践',
        'best_practices_title': '最佳实践 - 技术架构与最佳实践',
        'examples_title': '示例代码 - 技术架构与最佳实践',
        
        // 技术架构页面内容
        'architecture_overview_heading': '技术架构概述',
        'architecture_overview_desc': '本节介绍我们推荐的技术架构模式、组件设计和系统集成方案，帮助团队构建可扩展、高性能且易于维护的应用程序。',
        'frontend_architecture_heading': '前端架构',
        'frontend_architecture_desc': '现代前端应用程序通常采用组件化架构，以下是我们推荐的前端架构模式：',
        'backend_architecture_heading': '后端架构',
        'backend_architecture_desc': '后端架构应当支持可扩展性、安全性和高性能。以下是我们推荐的后端架构模式：',
        'database_architecture_heading': '数据库架构',
        'database_architecture_desc': '数据库设计对应用性能和可扩展性有重要影响。以下是我们推荐的数据库架构原则：',
        'deployment_architecture_heading': '部署架构',
        'deployment_architecture_desc': '现代应用程序通常采用云原生架构进行部署。以下是我们推荐的部署架构模式：',
        'security_architecture_heading': '安全架构',
        'security_architecture_desc': '安全是应用架构的核心考量因素。以下是我们推荐的安全架构原则：',
        
        // 最佳实践页面内容
        'best_practices_heading': '开发最佳实践',
        'best_practices_desc': '本节介绍我们推荐的开发最佳实践，包括编码规范、性能优化、安全措施和测试策略等，帮助团队提高代码质量和开发效率。',
        'coding_standards_heading': '编码规范',
        'coding_standards_desc': '良好的编码规范可以提高代码的可读性和可维护性，减少错误和技术债务。',
        'performance_optimization_heading': '性能优化',
        'performance_optimization_desc': '性能优化是提升用户体验和系统效率的关键。以下是一些常见的性能优化最佳实践：',
        'security_measures_heading': '安全措施',
        'security_measures_desc': '安全是应用开发中不可忽视的方面。以下是一些关键的安全最佳实践：',
        'testing_strategies_heading': '测试策略',
        'testing_strategies_desc': '全面的测试策略可以提高代码质量和可靠性。以下是推荐的测试最佳实践：',
        'code_review_heading': '代码审查',
        'code_review_desc': '代码审查是提高代码质量和知识共享的重要实践。以下是代码审查的最佳实践：',
        
        // 示例代码页面内容
        'examples_heading': '示例代码',
        'examples_intro': '本节提供了实际的代码示例，展示如何应用我们推荐的技术架构和最佳实践。这些示例可以作为开发过程中的参考和指导。',
        'frontend_examples_heading': '前端示例',
        'frontend_examples_intro': '以下是一些前端开发的示例代码，展示了组件化设计、状态管理和响应式布局等最佳实践。',
        'react_example_heading': 'React组件示例',
        'vue_example_heading': 'Vue组件示例',
        'backend_examples_heading': '后端示例',
        'backend_examples_intro': '以下是一些后端开发的示例代码，展示了RESTful API设计、数据访问层和错误处理等最佳实践。',
        'nodejs_example_heading': 'Node.js Express API示例',
        'java_example_heading': 'Java Spring Boot API示例',
        'database_examples_heading': '数据库示例',
        'database_examples_intro': '以下是一些数据库操作的示例代码，展示了数据模型设计、查询优化和事务管理等最佳实践。',
        'sql_example_heading': 'SQL数据库示例',
        'mongodb_example_heading': 'MongoDB示例',
        'security_examples_heading': '安全实践示例',
        'security_examples_intro': '以下是一些安全实践的示例代码，展示了输入验证、认证授权和数据加密等安全最佳实践。',
        'input_validation_heading': '输入验证示例',
        'auth_example_heading': '认证授权示例',
        
        // 语言选择器
        'language': '语言',
        'lang_zh': '中文',
        'lang_en': 'English',
        'lang_ja': '日本語',
        'lang_ko': '한국어'
    },
    'en-US': {
        // Navigation menu
        'nav_home': 'Home',
        'nav_architecture': 'Architecture',
        'nav_best_practices': 'Best Practices',
        'nav_examples': 'Examples',
        
        // Home page content
        'welcome_title': 'Welcome to Architecture & Best Practices Documentation',
        'welcome_desc': 'This documentation provides detailed technical architecture descriptions and development best practice guidelines to help development teams build high-quality applications.',
        'architecture_card_title': 'Architecture',
        'architecture_card_desc': 'Learn about our recommended technical architecture patterns, component design, and system integration solutions.',
        'best_practices_card_title': 'Best Practices',
        'best_practices_card_desc': 'Explore coding standards, performance optimization, security measures, and testing strategies.',
        'examples_card_title': 'Example Code',
        'examples_card_desc': 'Learn how to apply these architectures and best practices through actual code examples.',
        'view_details': 'View Details',
        'footer_copyright': '© 2023 Architecture & Best Practices Documentation. All rights reserved.',
        
        // Page titles
        'site_title': 'Architecture & Best Practices',
        'architecture_title': 'Architecture - Architecture & Best Practices',
        'best_practices_title': 'Best Practices - Architecture & Best Practices',
        'examples_title': 'Examples - Architecture & Best Practices',
        
        // Architecture page content
        'architecture_overview_heading': 'Architecture Overview',
        'architecture_overview_desc': 'This section introduces our recommended technical architecture patterns, component design, and system integration solutions to help teams build scalable, high-performance, and maintainable applications.',
        'frontend_architecture_heading': 'Frontend Architecture',
        'frontend_architecture_desc': 'Modern frontend applications typically adopt a component-based architecture. Here are our recommended frontend architecture patterns:',
        'backend_architecture_heading': 'Backend Architecture',
        'backend_architecture_desc': 'Backend architecture should support scalability, security, and high performance. Here are our recommended backend architecture patterns:',
        'database_architecture_heading': 'Database Architecture',
        'database_architecture_desc': 'Database design has a significant impact on application performance and scalability. Here are our recommended database architecture principles:',
        'deployment_architecture_heading': 'Deployment Architecture',
        'deployment_architecture_desc': 'Modern applications are typically deployed using cloud-native architecture. Here are our recommended deployment architecture patterns:',
        'security_architecture_heading': 'Security Architecture',
        'security_architecture_desc': 'Security is a core consideration in application architecture. Here are our recommended security architecture principles:',
        
        // Best practices page content
        'best_practices_heading': 'Development Best Practices',
        'best_practices_desc': 'This section introduces our recommended development best practices, including coding standards, performance optimization, security measures, and testing strategies, to help teams improve code quality and development efficiency.',
        'coding_standards_heading': 'Coding Standards',
        'coding_standards_desc': 'Good coding standards can improve code readability and maintainability, reducing errors and technical debt.',
        'performance_optimization_heading': 'Performance Optimization',
        'performance_optimization_desc': 'Performance optimization is key to enhancing user experience and system efficiency. Here are some common performance optimization best practices:',
        'security_measures_heading': 'Security Measures',
        'security_measures_desc': 'Security is an aspect that cannot be ignored in application development. Here are some key security best practices:',
        'testing_strategies_heading': 'Testing Strategies',
        'testing_strategies_desc': 'A comprehensive testing strategy can improve code quality and reliability. Here are recommended testing best practices:',
        'code_review_heading': 'Code Review',
        'code_review_desc': 'Code review is an important practice for improving code quality and knowledge sharing. Here are the best practices for code review:',
        
        // Examples page content
        'examples_heading': 'Example Code',
        'examples_intro': 'This section provides actual code examples that demonstrate how to apply our recommended technical architecture and best practices. These examples can serve as references and guidance during the development process.',
        'frontend_examples_heading': 'Frontend Examples',
        'frontend_examples_intro': 'Here are some frontend development code examples that demonstrate component design, state management, and responsive layout best practices.',
        'react_example_heading': 'React Component Example',
        'vue_example_heading': 'Vue Component Example',
        'backend_examples_heading': 'Backend Examples',
        'backend_examples_intro': 'Here are some backend development code examples that demonstrate RESTful API design, data access layer, and error handling best practices.',
        'nodejs_example_heading': 'Node.js Express API Example',
        'java_example_heading': 'Java Spring Boot API Example',
        'database_examples_heading': 'Database Examples',
        'database_examples_intro': 'Here are some database operation code examples that demonstrate data model design, query optimization, and transaction management best practices.',
        'sql_example_heading': 'SQL Database Example',
        'mongodb_example_heading': 'MongoDB Example',
        'security_examples_heading': 'Security Practice Examples',
        'security_examples_intro': 'Here are some security practice code examples that demonstrate input validation, authentication authorization, and data encryption best practices.',
        'input_validation_heading': 'Input Validation Example',
        'auth_example_heading': 'Authentication Authorization Example',
        
        // Language selector
        'language': 'Language',
        'lang_zh': '中文',
        'lang_en': 'English',
        'lang_ja': '日本語',
        'lang_ko': '한국어'
    },
    'ja-JP': {
        // ナビゲーションメニュー
        'nav_home': 'ホーム',
        'nav_architecture': 'アーキテクチャ',
        'nav_best_practices': 'ベストプラクティス',
        'nav_examples': '例示コード',
        
        // ホームページコンテンツ
        'welcome_title': 'アーキテクチャとベストプラクティスのドキュメントへようこそ',
        'welcome_desc': 'このドキュメントは、開発チームが高品質のアプリケーションを構築するのに役立つ、詳細な技術アーキテクチャの説明と開発のベストプラクティスガイドラインを提供します。',
        'architecture_card_title': 'アーキテクチャ',
        'architecture_card_desc': '推奨する技術アーキテクチャパターン、コンポーネント設計、システム統合ソリューションについて学びます。',
        'best_practices_card_title': 'ベストプラクティス',
        'best_practices_card_desc': 'コーディング標準、パフォーマンス最適化、セキュリティ対策、テスト戦略を探索します。',
        'examples_card_title': '例示コード',
        'examples_card_desc': '実際のコード例を通じて、これらのアーキテクチャとベストプラクティスを適用する方法を学びます。',
        'view_details': '詳細を見る',
        'footer_copyright': '© 2023 アーキテクチャとベストプラクティスのドキュメント。全著作権所有。',
        
        // ページタイトル
        'site_title': 'アーキテクチャとベストプラクティス',
        'architecture_title': 'アーキテクチャ - アーキテクチャとベストプラクティス',
        'best_practices_title': 'ベストプラクティス - アーキテクチャとベストプラクティス',
        'examples_title': '例示コード - アーキテクチャとベストプラクティス',
        
        // アーキテクチャページのコンテンツ
        'architecture_overview_heading': 'アーキテクチャ概要',
        'architecture_overview_desc': 'このセクションでは、チームが拡張性、高性能、保守性の高いアプリケーションを構築するのに役立つ、推奨される技術アーキテクチャパターン、コンポーネント設計、システム統合ソリューションを紹介します。',
        'frontend_architecture_heading': 'フロントエンドアーキテクチャ',
        'frontend_architecture_desc': '現代のフロントエンドアプリケーションは通常、コンポーネントベースのアーキテクチャを採用しています。以下は、推奨するフロントエンドアーキテクチャパターンです：',
        'backend_architecture_heading': 'バックエンドアーキテクチャ',
        'backend_architecture_desc': 'バックエンドアーキテクチャは、スケーラビリティ、セキュリティ、高性能をサポートする必要があります。以下は、推奨するバックエンドアーキテクチャパターンです：',
        'database_architecture_heading': 'データベースアーキテクチャ',
        'database_architecture_desc': 'データベース設計はアプリケーションのパフォーマンスとスケーラビリティに大きな影響を与えます。以下は、推奨するデータベースアーキテクチャの原則です：',
        'deployment_architecture_heading': 'デプロイメントアーキテクチャ',
        'deployment_architecture_desc': '現代のアプリケーションは通常、クラウドネイティブアーキテクチャを使用してデプロイされます。以下は、推奨するデプロイメントアーキテクチャパターンです：',
        'security_architecture_heading': 'セキュリティアーキテクチャ',
        'security_architecture_desc': 'セキュリティはアプリケーションアーキテクチャの中核的な考慮事項です。以下は、推奨するセキュリティアーキテクチャの原則です：',
        
        // ベストプラクティスページのコンテンツ
        'best_practices_heading': '開発ベストプラクティス',
        'best_practices_desc': 'このセクションでは、コーディング標準、パフォーマンス最適化、セキュリティ対策、テスト戦略など、チームがコード品質と開発効率を向上させるのに役立つ推奨開発ベストプラクティスを紹介します。',
        'coding_standards_heading': 'コーディング標準',
        'coding_standards_desc': '優れたコーディング標準は、コードの読みやすさと保守性を向上させ、エラーと技術的負債を減らすことができます。',
        'performance_optimization_heading': 'パフォーマンス最適化',
        'performance_optimization_desc': 'パフォーマンス最適化はユーザーエクスペリエンスとシステム効率を向上させるための鍵です。以下は、一般的なパフォーマンス最適化のベストプラクティスです：',
        'security_measures_heading': 'セキュリティ対策',
        'security_measures_desc': 'セキュリティはアプリケーション開発において無視できない側面です。以下は、主要なセキュリティベストプラクティスです：',
        'testing_strategies_heading': 'テスト戦略',
        'testing_strategies_desc': '包括的なテスト戦略はコード品質と信頼性を向上させることができます。以下は、推奨されるテストのベストプラクティスです：',
        'code_review_heading': 'コードレビュー',
        'code_review_desc': 'コードレビューはコード品質と知識共有を向上させるための重要な実践です。以下は、コードレビューのベストプラクティスです：',
        
        // 例示コードページのコンテンツ
        'examples_heading': '例示コード',
        'examples_intro': 'このセクションでは、推奨する技術アーキテクチャとベストプラクティスを適用する方法を示す実際のコード例を提供します。これらの例は、開発プロセス中の参考とガイダンスとして役立ちます。',
        'frontend_examples_heading': 'フロントエンド例',
        'frontend_examples_intro': 'コンポーネント設計、状態管理、レスポンシブレイアウトのベストプラクティスを示すフロントエンド開発のコード例をいくつか紹介します。',
        'react_example_heading': 'Reactコンポーネント例',
        'vue_example_heading': 'Vueコンポーネント例',
        'backend_examples_heading': 'バックエンド例',
        'backend_examples_intro': 'RESTful API設計、データアクセス層、エラー処理のベストプラクティスを示すバックエンド開発のコード例をいくつか紹介します。',
        'nodejs_example_heading': 'Node.js Express API例',
        'java_example_heading': 'Java Spring Boot API例',
        'database_examples_heading': 'データベース例',
        'database_examples_intro': 'データモデル設計、クエリ最適化、トランザクション管理のベストプラクティスを示すデータベース操作のコード例をいくつか紹介します。',
        'sql_example_heading': 'SQLデータベース例',
        'mongodb_example_heading': 'MongoDB例',
        'security_examples_heading': 'セキュリティ実践例',
        'security_examples_intro': '入力検証、認証承認、データ暗号化のベストプラクティスを示すセキュリティ実践のコード例をいくつか紹介します。',
        'input_validation_heading': '入力検証例',
        'auth_example_heading': '認証承認例',
        
        // 言語セレクター
        'language': '言語',
        'lang_zh': '中文',
        'lang_en': 'English',
        'lang_ja': '日本語',
        'lang_ko': '한국어'
    },
    'ko-KR': {
        // 네비게이션 메뉴
        'nav_home': '홈',
        'nav_architecture': '기술 아키텍처',
        'nav_best_practices': '모범 사례',
        'nav_examples': '예제 코드',
        
        // 홈페이지 내용
        'welcome_title': '기술 아키텍처 및 모범 사례 문서에 오신 것을 환영합니다',
        'welcome_desc': '이 문서는 개발 팀이 고품질 애플리케이션을 구축하는 데 도움이 되는 상세한 기술 아키텍처 설명과 개발 모범 사례 지침을 제공합니다.',
        'architecture_card_title': '기술 아키텍처',
        'architecture_card_desc': '권장하는 기술 아키텍처 패턴, 구성 요소 설계 및 시스템 통합 솔루션에 대해 알아보세요.',
        'best_practices_card_title': '모범 사례',
        'best_practices_card_desc': '코딩 표준, 성능 최적화, 보안 조치 및 테스트 전략을 탐색하세요.',
        'examples_card_title': '예제 코드',
        'examples_card_desc': '실제 코드 예제를 통해 이러한 아키텍처와 모범 사례를 적용하는 방법을 배우세요.',
        'view_details': '자세히 보기',
        'footer_copyright': '© 2023 기술 아키텍처 및 모범 사례 문서. 모든 권리 보유.',
        
        // 페이지 제목
        'site_title': '기술 아키텍처 및 모범 사례',
        'architecture_title': '기술 아키텍처 - 기술 아키텍처 및 모범 사례',
        'best_practices_title': '모범 사례 - 기술 아키텍처 및 모범 사례',
        'examples_title': '예제 코드 - 기술 아키텍처 및 모범 사례',
        
        // 아키텍처 페이지 내용
        'architecture_overview_heading': '기술 아키텍처 개요',
        'architecture_overview_desc': '이 섹션에서는 팀이 확장 가능하고 고성능이며 유지 관리가 용이한 애플리케이션을 구축하는 데 도움이 되는 권장 기술 아키텍처 패턴, 구성 요소 설계 및 시스템 통합 솔루션을 소개합니다.',
        'frontend_architecture_heading': '프론트엔드 아키텍처',
        'frontend_architecture_desc': '현대 프론트엔드 애플리케이션은 일반적으로 컴포넌트 기반 아키텍처를 채택합니다. 다음은 권장하는 프론트엔드 아키텍처 패턴입니다:',
        'backend_architecture_heading': '백엔드 아키텍처',
        'backend_architecture_desc': '백엔드 아키텍처는 확장성, 보안 및 고성능을 지원해야 합니다. 다음은 권장하는 백엔드 아키텍처 패턴입니다:',
        'database_architecture_heading': '데이터베이스 아키텍처',
        'database_architecture_desc': '데이터베이스 설계는 애플리케이션 성능과 확장성에 중요한 영향을 미칩니다. 다음은 권장하는 데이터베이스 아키텍처 원칙입니다:',
        'deployment_architecture_heading': '배포 아키텍처',
        'deployment_architecture_desc': '현대 애플리케이션은 일반적으로 클라우드 네이티브 아키텍처를 사용하여 배포됩니다. 다음은 권장하는 배포 아키텍처 패턴입니다:',
        'security_architecture_heading': '보안 아키텍처',
        'security_architecture_desc': '보안은 애플리케이션 아키텍처의 핵심 고려 사항입니다. 다음은 권장하는 보안 아키텍처 원칙입니다:',
        
        // 모범 사례 페이지 내용
        'best_practices_heading': '개발 모범 사례',
        'best_practices_desc': '이 섹션에서는 코딩 표준, 성능 최적화, 보안 조치 및 테스트 전략을 포함하여 팀이 코드 품질과 개발 효율성을 향상시키는 데 도움이 되는 권장 개발 모범 사례를 소개합니다.',
        'coding_standards_heading': '코딩 표준',
        'coding_standards_desc': '좋은 코딩 표준은 코드 가독성과 유지 관리성을 향상시키고 오류와 기술적 부채를 줄일 수 있습니다.',
        'performance_optimization_heading': '성능 최적화',
        'performance_optimization_desc': '성능 최적화는 사용자 경험과 시스템 효율성을 향상시키는 핵심입니다. 다음은 일반적인 성능 최적화 모범 사례입니다:',
        'security_measures_heading': '보안 조치',
        'security_measures_desc': '보안은 애플리케이션 개발에서 간과할 수 없는 측면입니다. 다음은 주요 보안 모범 사례입니다:',
        'testing_strategies_heading': '테스트 전략',
        'testing_strategies_desc': '포괄적인 테스트 전략은 코드 품질과 신뢰성을 향상시킬 수 있습니다. 다음은 권장하는 테스트 모범 사례입니다:',
        'code_review_heading': '코드 리뷰',
        'code_review_desc': '코드 리뷰는 코드 품질과 지식 공유를 향상시키는 중요한 관행입니다. 다음은 코드 리뷰를 위한 모범 사례입니다:',
        
        // 예제 코드 페이지 내용
        'examples_heading': '예제 코드',
        'examples_intro': '이 섹션에서는 권장하는 기술 아키텍처와 모범 사례를 적용하는 방법을 보여주는 실제 코드 예제를 제공합니다. 이러한 예제는 개발 과정에서 참조 및 지침으로 사용할 수 있습니다.',
        'frontend_examples_heading': '프론트엔드 예제',
        'frontend_examples_intro': '다음은 컴포넌트 설계, 상태 관리 및 반응형 레이아웃 모범 사례를 보여주는 프론트엔드 개발 코드 예제입니다.',
        'react_example_heading': 'React 컴포넌트 예제',
        'vue_example_heading': 'Vue 컴포넌트 예제',
        'backend_examples_heading': '백엔드 예제',
        'backend_examples_intro': '다음은 RESTful API 설계, 데이터 액세스 계층 및 오류 처리 모범 사례를 보여주는 백엔드 개발 코드 예제입니다.',
        'nodejs_example_heading': 'Node.js Express API 예제',
        'java_example_heading': 'Java Spring Boot API 예제',
        'database_examples_heading': '데이터베이스 예제',
        'database_examples_intro': '다음은 데이터 모델 설계, 쿼리 최적화 및 트랜잭션 관리 모범 사례를 보여주는 데이터베이스 작업 코드 예제입니다.',
        'sql_example_heading': 'SQL 데이터베이스 예제',
        'mongodb_example_heading': 'MongoDB 예제',
        'security_examples_heading': '보안 사례 예제',
        'security_examples_intro': '다음은 입력 유효성 검사, 인증 권한 부여 및 데이터 암호화 모범 사례를 보여주는 보안 사례 코드 예제입니다.',
        'input_validation_heading': '입력 유효성 검사 예제',
        'auth_example_heading': '인증 권한 부여 예제',
        
        // 언어 선택기
        'language': '언어',
        'lang_zh': '中文',
        'lang_en': 'English',
        'lang_ja': '日本語',
        'lang_ko': '한국어'
    }
};

// 当前语言
let currentLang = localStorage.getItem('preferredLanguage') || 'zh-CN';

// 获取翻译文本
function getTranslation(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    // 如果找不到翻译，返回中文版本作为后备
    if (translations['zh-CN'] && translations['zh-CN'][key]) {
        return translations['zh-CN'][key];
    }
    // 如果连中文版本也没有，直接返回键名
    return key;
}

// 切换语言
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        updatePageContent();
        updateHtmlLangAttribute(lang);
    }
}

// 更新HTML的lang属性
function updateHtmlLangAttribute(lang) {
    document.documentElement.lang = lang;
}

// 更新页面内容
function updatePageContent() {
    // 更新导航菜单
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = getTranslation(key);
            } else {
                element.textContent = getTranslation(key);
            }
        }
    });
    
    // 更新页面标题
    const titleKey = document.title.startsWith('技术架构') ? 'architecture_title' :
                    document.title.startsWith('最佳实践') ? 'best_practices_title' :
                    document.title.startsWith('示例代码') ? 'examples_title' : 'site_title';
    document.title = getTranslation(titleKey);
    
    // 更新按钮文本
    document.querySelectorAll('.btn').forEach(btn => {
        btn.textContent = getTranslation('view_details');
    });
    
    // 更新页脚版权信息
    const footerCopyright = document.querySelector('footer p');
    if (footerCopyright) {
        footerCopyright.textContent = getTranslation('footer_copyright');
    }
}

// 初始化语言选择器
function initLanguageSelector() {
    const header = document.querySelector('header .container');
    if (!header) return;
    
    // 创建语言选择器容器
    const langSelector = document.createElement('div');
    langSelector.className = 'language-selector';
    
    // 创建语言选择下拉菜单
    const langDropdown = document.createElement('div');
    langDropdown.className = 'lang-dropdown';
    
    // 创建当前语言显示
    const currentLangDisplay = document.createElement('div');
    currentLangDisplay.className = 'current-lang';
    currentLangDisplay.textContent = getTranslation('lang_' + currentLang.substring(0, 2));
    currentLangDisplay.addEventListener('click', function() {
        langDropdown.classList.toggle('show-dropdown');
    });
    
    // 创建语言选项列表
    const langOptions = document.createElement('div');
    langOptions.className = 'lang-options';
    
    // 添加语言选项
    const languages = [
        { code: 'zh-CN', label: 'lang_zh' },
        { code: 'en-US', label: 'lang_en' },
        { code: 'ja-JP', label: 'lang_ja' },
        { code: 'ko-KR', label: 'lang_ko' }
    ];
    
    languages.forEach(lang => {
        const option = document.createElement('div');
        option.className = 'lang-option';
        option.setAttribute('data-lang', lang.code);
        option.textContent = getTranslation(lang.label);
        option.addEventListener('click', function() {
            setLanguage(lang.code);
            currentLangDisplay.textContent = getTranslation(lang.label);
            langDropdown.classList.remove('show-dropdown');
        });
        langOptions.appendChild(option);
    });
    
    // 组装语言选择器
    langDropdown.appendChild(currentLangDisplay);
    langDropdown.appendChild(langOptions);
    langSelector.appendChild(langDropdown);
    
    // 添加到页面
    header.appendChild(langSelector);
    
    // 点击页面其他地方关闭下拉菜单
    document.addEventListener('click', function(event) {
        if (!langSelector.contains(event.target)) {
            langDropdown.classList.remove('show-dropdown');
        }
    });
}

// 导出模块
export { getTranslation, setLanguage, initLanguageSelector, updatePageContent };