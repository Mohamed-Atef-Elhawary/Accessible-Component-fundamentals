import { Component } from '@angular/core';
import { MultipleOpenSectionsDirective } from '../../../directives/disclosure-directives/multiple-open-sections-directive/multiple-open-sections-directive';

import { DisclosureSectionComponent } from '../disclosure-section-component/disclosure-section-component';
import { DisplayAndAppearanceSettingsComponent } from '../features/settings-components/display-and-appearance-settings-component/display-and-appearance-settings-component';
import { LanguageSettingsComponent } from '../features/settings-components/language-settings-component/language-settings-component';
import { LineHeightSettingsComponent } from '../features/settings-components/line-height-settings-component/line-height-settings-component';
import { PrivacySettingsComponent } from '../features/settings-components/privacy-settings-component/privacy-settings-component';
import { TextSizeSettingsComponent } from '../features/settings-components/text-size-settings-component/text-size-settings-component';
import { NotificationSettingsComponent } from '../features/settings-components/notification-settings-component/notification-settings-component';
import { LayoutDensitySettingsComponent } from '../features/settings-components/layout-density-settings-component/layout-density-settings-component';
import { AccessibilitySettingsComponent } from '../features/settings-components/accessibility-settings-component/accessibility-settings-component';

@Component({
  imports: [
    DisclosureSectionComponent,
    PrivacySettingsComponent,
    NotificationSettingsComponent,
    LayoutDensitySettingsComponent,
    AccessibilitySettingsComponent,
    DisplayAndAppearanceSettingsComponent,
    LanguageSettingsComponent,
    TextSizeSettingsComponent,
    LineHeightSettingsComponent,
    MultipleOpenSectionsDirective,
  ],
  selector: 'app-disclosure-settings-sections-component',
  styleUrl: './disclosure-settings-sections-component.css',
  templateUrl: './disclosure-settings-sections-component.html',
})
export class DisclosureSettingsSectionsComponent {}
