import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { LogoHyundai } from "../../icons/LogoHyundai";
import "./style.css";

export const CampagneHyundai = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="campagne-hyundai">
      <div
        className="div"
        style={{
          height: screenWidth < 1200 ? "1554.93vw" : screenWidth >= 1200 ? "387.29vw" : undefined,
        }}
      >
        <div
          className="overlap"
          style={{
            height: screenWidth >= 1200 ? "58.59vw" : screenWidth < 1200 ? "36.8vw" : undefined,
            width: screenWidth >= 1200 ? "100.21vw" : screenWidth < 1200 ? "100.0vw" : undefined,
          }}
        >
          {screenWidth >= 1200 && (
            <>
              <div className="group">
                <div className="top-balk">
                  <LogoHyundai className="logo-hyundai" />
                  <div className="keurmerk" />
                </div>
              </div>
              <div className="SECTION-header">
                <div className="overlap-group">
                  <div className="groot-beeld-slider">
                    <div className="overlap-group-2">
                      <div className="tijdelijk-voor-maar">
                        Tijdelijk voor
                        <br />
                        maar €275 p/m
                      </div>
                      <div className="ontdek-meer">ONTDEK MEER</div>
                      <div className="navigatie-slider">
                        <img className="arrow-left" alt="Arrow left" src="/img/arrow-left.png" />
                        <img className="arrow-right" alt="Arrow right" src="/img/arrow-right.png" />
                      </div>
                    </div>
                  </div>
                  <div className="CTA-balk">
                    <p className="private-lease-nu">
                      Private Lease nu tijdelijk
                      <br />
                      vanaf €275 p/m*
                    </p>
                    <button className="button">
                      <div className="text-wrapper">Vraag offerte aan</div>
                      <img className="img" alt="Arrow button" src="/img/color-white-type-button.png" />
                    </button>
                  </div>
                </div>
                <div className="hoofd-titel-tekst">
                  <div className="label">
                    <div className="nieuw">NIEUW</div>
                  </div>
                  <div className="frame">
                    <div className="de-vernieuwde">
                      De vernieuwde
                      <br />
                      Hyundai i10
                    </div>
                    <div className="text-wrapper-2">Maak een groots statement</div>
                  </div>
                </div>
                <p className="profiteer-nu-van-een">
                  <span className="span">
                    Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.
                    <br />
                  </span>
                  <span className="text-wrapper-3">Je stapt al in vanaf €275 per maand*</span>
                </p>
                <p className="p">
                  * Het maandbedrag van €275 geldt op basis van een looptijd van 72 maanden en 5.000 km per jaar bij de
                  i10 Comfort!
                </p>
              </div>
            </>
          )}

          {screenWidth < 1200 && (
            <div className="top-balk-2">
              <LogoHyundai className="logo-hyundai-1" />
              <div className="keurmerk-2" />
            </div>
          )}
        </div>
        <div
          className="SECTION-all"
          style={{
            height: screenWidth < 1200 ? "418.4vw" : screenWidth >= 1200 ? "60.26vw" : undefined,
            top: screenWidth < 1200 ? "266.67vw" : screenWidth >= 1200 ? "65.36vw" : undefined,
          }}
        >
          <div
            className="overlap-group-3"
            style={{
              height: screenWidth < 1200 ? "256.8vw" : screenWidth >= 1200 ? "47.14vw" : undefined,
              top: screenWidth < 1200 ? "140.0vw" : screenWidth >= 1200 ? "5.83vw" : undefined,
              width: screenWidth < 1200 ? "100.0vw" : screenWidth >= 1200 ? "91.41vw" : undefined,
            }}
          >
            <img
              className="vrouw-blij-auto"
              style={{
                height: screenWidth < 1200 ? "64.0vw" : screenWidth >= 1200 ? "47.14vw" : undefined,
                width: screenWidth < 1200 ? "100.0vw" : screenWidth >= 1200 ? "42.34vw" : undefined,
              }}
              alt="Vrouw blij auto"
              src={
                screenWidth < 1200
                  ? "/img/vrouw-blij-auto.png"
                  : screenWidth >= 1200
                  ? "/img/vrouw-blij-auto-1.png"
                  : undefined
              }
            />
            <div
              className="voordelen-blokken"
              style={{
                alignItems: screenWidth < 1200 ? "center" : screenWidth >= 1200 ? "flex-start" : undefined,
                display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
                flexDirection: screenWidth < 1200 ? "column" : undefined,
                gap: screenWidth < 1200 ? "3.6vw" : screenWidth >= 1200 ? "0.7vw" : undefined,
                left: screenWidth < 1200 ? "5.33vw" : screenWidth >= 1200 ? "8.33vw" : undefined,
                top: screenWidth < 1200 ? "39.73vw" : screenWidth >= 1200 ? "31.87vw" : undefined,
                width: screenWidth < 1200 ? "89.33vw" : undefined,
              }}
            >
              <div
                className="voordeel"
                style={{
                  alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                  borderRadius: screenWidth < 1200 ? "4.43vw" : screenWidth >= 1200 ? "0.86vw" : undefined,
                  boxShadow:
                    screenWidth < 1200
                      ? "0.0vw 7.19vw 11.07vw #26397e24"
                      : screenWidth >= 1200
                      ? "0.0vw 1.41vw 2.16vw #26397e24"
                      : undefined,
                  display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
                  flexDirection: screenWidth >= 1200 ? "column" : undefined,
                  gap: screenWidth < 1200 ? "5.33vw" : screenWidth >= 1200 ? "1.35vw" : undefined,
                  padding: screenWidth < 1200 ? "10.67vw 8.0vw" : screenWidth >= 1200 ? "2.43vw 2.59vw" : undefined,
                  width: screenWidth < 1200 ? "100%" : undefined,
                }}
              >
                <img
                  className="icons-lease"
                  style={{
                    height: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                    width: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                  }}
                  alt="Icons lease"
                  src={
                    screenWidth < 1200
                      ? "/img/icons-lease-3.png"
                      : screenWidth >= 1200
                      ? "/img/stuurwiel.png"
                      : undefined
                  }
                />
                <div
                  className="rijden-in-een-nieuwe"
                  style={{
                    marginTop: screenWidth < 1200 ? "-0.28vw" : undefined,
                  }}
                >
                  Rijden in een
                  <br />
                  nieuwe Hyundai
                </div>
              </div>
              <div
                className="voordeel-2"
                style={{
                  alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                  borderRadius: screenWidth < 1200 ? "4.43vw" : screenWidth >= 1200 ? "0.86vw" : undefined,
                  boxShadow:
                    screenWidth < 1200
                      ? "0.0vw 7.19vw 11.07vw #26397e24"
                      : screenWidth >= 1200
                      ? "0.0vw 1.41vw 2.16vw #26397e24"
                      : undefined,
                  display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
                  flexDirection: screenWidth >= 1200 ? "column" : undefined,
                  gap: screenWidth < 1200 ? "5.33vw" : screenWidth >= 1200 ? "1.35vw" : undefined,
                  padding: screenWidth < 1200 ? "10.67vw 8.0vw" : screenWidth >= 1200 ? "2.43vw 2.59vw" : undefined,
                  width: screenWidth < 1200 ? "100%" : undefined,
                }}
              >
                <img
                  className="icons-lease-2"
                  style={{
                    height: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                    width: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                  }}
                  alt="Icons lease"
                  src={
                    screenWidth < 1200 ? "/img/icons-lease-1.png" : screenWidth >= 1200 ? "/img/coins.png" : undefined
                  }
                />
                <div
                  className="text-wrapper-4"
                  style={{
                    marginTop: screenWidth < 1200 ? "-0.28vw" : undefined,
                    width: screenWidth < 1200 ? "57.01vw" : screenWidth >= 1200 ? "11.13vw" : undefined,
                  }}
                >
                  Aantrekkelijk vast bedrag p/m
                </div>
              </div>
              <div
                className="voordeel-3"
                style={{
                  alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                  borderRadius: screenWidth < 1200 ? "4.43vw" : screenWidth >= 1200 ? "0.86vw" : undefined,
                  boxShadow:
                    screenWidth < 1200
                      ? "0.0vw 7.19vw 11.07vw #26397e24"
                      : screenWidth >= 1200
                      ? "0.0vw 1.41vw 2.16vw #26397e24"
                      : undefined,
                  display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
                  flexDirection: screenWidth >= 1200 ? "column" : undefined,
                  gap: screenWidth < 1200 ? "5.33vw" : screenWidth >= 1200 ? "1.35vw" : undefined,
                  padding: screenWidth < 1200 ? "10.67vw 8.0vw" : screenWidth >= 1200 ? "2.43vw 2.59vw" : undefined,
                  width: screenWidth < 1200 ? "100%" : undefined,
                }}
              >
                <img
                  className="icons-lease-3"
                  style={{
                    height: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                    width: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                  }}
                  alt="Icons lease"
                  src={
                    screenWidth < 1200
                      ? "/img/icons-lease-4.png"
                      : screenWidth >= 1200
                      ? "/img/verzekering.png"
                      : undefined
                  }
                />
                <div
                  className="text-wrapper-5"
                  style={{
                    marginTop: screenWidth < 1200 ? "-0.28vw" : undefined,
                    width: screenWidth < 1200 ? "57.01vw" : screenWidth >= 1200 ? "11.13vw" : undefined,
                  }}
                >
                  Inc. verzekering en reparatie
                </div>
              </div>
              <div
                className="voordeel-4"
                style={{
                  alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                  borderRadius: screenWidth < 1200 ? "4.43vw" : screenWidth >= 1200 ? "0.86vw" : undefined,
                  boxShadow:
                    screenWidth < 1200
                      ? "0.0vw 7.19vw 11.07vw #26397e24"
                      : screenWidth >= 1200
                      ? "0.0vw 1.41vw 2.16vw #26397e24"
                      : undefined,
                  display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
                  flexDirection: screenWidth >= 1200 ? "column" : undefined,
                  gap: screenWidth < 1200 ? "5.33vw" : screenWidth >= 1200 ? "1.35vw" : undefined,
                  padding: screenWidth < 1200 ? "10.67vw 8.0vw" : screenWidth >= 1200 ? "2.43vw 2.59vw" : undefined,
                  width: screenWidth < 1200 ? "100%" : undefined,
                }}
              >
                <img
                  className="icons-lease-4"
                  style={{
                    height: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                    width: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                  }}
                  alt="Icons lease"
                  src={
                    screenWidth < 1200 ? "/img/icons-lease.png" : screenWidth >= 1200 ? "/img/schade.png" : undefined
                  }
                />
                <div
                  className="text-wrapper-6"
                  style={{
                    marginTop: screenWidth < 1200 ? "-0.28vw" : undefined,
                    width: screenWidth < 1200 ? "57.01vw" : screenWidth >= 1200 ? "11.13vw" : undefined,
                  }}
                >
                  Schadeherstel en onderhoud
                </div>
              </div>
              <div
                className="voordeel-5"
                style={{
                  alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                  borderRadius: screenWidth < 1200 ? "4.43vw" : screenWidth >= 1200 ? "0.86vw" : undefined,
                  boxShadow:
                    screenWidth < 1200
                      ? "0.0vw 7.19vw 11.07vw #26397e24"
                      : screenWidth >= 1200
                      ? "0.0vw 1.41vw 2.16vw #26397e24"
                      : undefined,
                  display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
                  flexDirection: screenWidth >= 1200 ? "column" : undefined,
                  gap: screenWidth < 1200 ? "5.33vw" : screenWidth >= 1200 ? "1.35vw" : undefined,
                  padding: screenWidth < 1200 ? "10.67vw 8.0vw" : screenWidth >= 1200 ? "2.43vw 2.59vw" : undefined,
                  width: screenWidth < 1200 ? "100%" : undefined,
                }}
              >
                <img
                  className="icons-lease-5"
                  style={{
                    height: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                    width: screenWidth < 1200 ? "10.67vw" : screenWidth >= 1200 ? "2.08vw" : undefined,
                  }}
                  alt="Icons lease"
                  src={
                    screenWidth < 1200
                      ? "/img/icons-lease-2.png"
                      : screenWidth >= 1200
                      ? "/img/portmonnee.png"
                      : undefined
                  }
                />
                <div
                  className="text-wrapper-7"
                  style={{
                    marginTop: screenWidth < 1200 ? "-0.28vw" : undefined,
                    width: screenWidth < 1200 ? "57.01vw" : screenWidth >= 1200 ? "11.13vw" : undefined,
                  }}
                >
                  Geen verborgen kosten
                </div>
              </div>
            </div>
          </div>
          <div
            className="frame-2"
            style={{
              display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
              gap: screenWidth < 1200 ? "10.13vw" : screenWidth >= 1200 ? "1.98vw" : undefined,
              left: screenWidth < 1200 ? "5.33vw" : screenWidth >= 1200 ? "50.36vw" : undefined,
              top: screenWidth < 1200 ? "9.07vw" : screenWidth >= 1200 ? "10.05vw" : undefined,
              width: screenWidth < 1200 ? "90.67vw" : undefined,
            }}
          >
            <div
              className="titel-all-inclusive"
              style={{
                alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                display: screenWidth < 1200 ? "flex" : screenWidth >= 1200 ? "inline-flex" : undefined,
                gap: screenWidth < 1200 ? "2.67vw" : screenWidth >= 1200 ? "0.52vw" : undefined,
                width: screenWidth < 1200 ? "100%" : undefined,
              }}
            >
              <div
                className="text-wrapper-8"
                style={{
                  fontSize: screenWidth < 1200 ? "4.8vw" : screenWidth >= 1200 ? "0.94vw" : undefined,
                  lineHeight: screenWidth < 1200 ? "8.53vw" : screenWidth >= 1200 ? "1.67vw" : undefined,
                  marginTop: screenWidth < 1200 ? "-0.27vw" : screenWidth >= 1200 ? "-0.05vw" : undefined,
                }}
              >
                Hyundai i10
              </div>
              <p
                className="text-wrapper-9"
                style={{
                  alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                  fontFamily:
                    screenWidth < 1200
                      ? "var(--title-bold-font-family)"
                      : screenWidth >= 1200
                      ? "'Hyundai Sans Head Office-Bold', Helvetica"
                      : undefined,
                  fontSize:
                    screenWidth < 1200 ? "var(--title-bold-font-size)" : screenWidth >= 1200 ? "2.5vw" : undefined,
                  fontStyle: screenWidth < 1200 ? "var(--title-bold-font-style)" : undefined,
                  fontWeight:
                    screenWidth < 1200 ? "var(--title-bold-font-weight)" : screenWidth >= 1200 ? "1200" : undefined,
                  letterSpacing:
                    screenWidth < 1200 ? "var(--title-bold-letter-spacing)" : screenWidth >= 1200 ? "0" : undefined,
                  lineHeight:
                    screenWidth < 1200 ? "var(--title-bold-line-height)" : screenWidth >= 1200 ? "3.07vw" : undefined,
                  width: screenWidth >= 1200 ? "35.1vw" : undefined,
                }}
              >
                All-inclusive genieten met Hyundai Private Lease
              </p>
            </div>
            <p
              className="vast-maandbedrag"
              style={{
                alignSelf: screenWidth < 1200 ? "stretch" : undefined,
                width: screenWidth >= 1200 ? "36.2vw" : undefined,
              }}
            >
              Vast maandbedrag inclusief alle kosten, behalve brandstof
              <br />
              Nieuwe auto met inbegrepen rente en afschrijving
              <br />
              Pechhulp in binnenland en Europa
              <br />
              Motorrijtuigenbelasting inbegrepen
              <br />
              Bandenvervanging, schadeherstel en glasreparatie gedekt
              <br />
              Afleveringskosten en verwijderingsbijdrage inclusief
              <br />
              Onderhoud inbegrepen
              <br />
              Volle tank brandstof bij aflevering
            </p>
          </div>
        </div>
        {screenWidth >= 1200 && (
          <div className="SECTION-uitvoeringen">
            <div className="tabel-sectie">
              <div className="text-wrapper-10">Uitvoeringen en hun functionaliteiten</div>
              <div className="tabel">
                <div className="functionaliteiten">
                  <div className="titel">
                    <div className="bill-montly">Functionaliteiten</div>
                  </div>
                  <div className="onderdelen">
                    <div className="frame-3">
                      <div className="profile-groups">Actieve rijbaanassistentie (LKA)</div>
                      <img className="separators" alt="Separators" src="/img/separators-119.png" />
                      <div className="text-wrapper-11">Cruise Control met limiet</div>
                      <img className="separators" alt="Separators" src="/img/separators-120.png" />
                      <div className="text-wrapper-11">Noodremassistent (FCA) met voetgangerherkenning</div>
                      <img className="separators" alt="Separators" src="/img/separators-121.png" />
                      <div className="text-wrapper-11">eCall (Emergency Call)</div>
                      <img className="separators" alt="Separators" src="/img/separators-122.png" />
                      <div className="text-wrapper-11">Start/Stop systeem</div>
                      <img className="separators" alt="Separators" src="/img/separators-123.png" />
                      <div className="text-wrapper-11">Achterbank in delen neerklapbaar</div>
                      <img className="separators" alt="Separators" src="/img/separators-124.png" />
                      <div className="text-wrapper-11">Zij- en gordijnairbags</div>
                      <img className="separators" alt="Separators" src="/img/separators-125.png" />
                      <div className="text-wrapper-11">ABS</div>
                      <img className="separators" alt="Separators" src="/img/separators-126.png" />
                      <div className="text-wrapper-11">Vermoeidheidsherkenning</div>
                      <img className="separators" alt="Separators" src="/img/separators-127.png" />
                      <div className="text-wrapper-11">8 inch multimediascherm</div>
                      <img className="separators" alt="Separators" src="/img/separators-119.png" />
                      <div className="text-wrapper-11">USB aansluiting</div>
                      <img className="separators" alt="Separators" src="/img/separators-120.png" />
                      <p className="text-wrapper-11">Android Auto (voorbereiding) / Apple carplay</p>
                      <img className="separators" alt="Separators" src="/img/separators-121.png" />
                      <div className="text-wrapper-11">Airconditioning (manueel)</div>
                      <img className="separators" alt="Separators" src="/img/separators-122.png" />
                      <p className="text-wrapper-11">8 inch multimediascherm met navigatie</p>
                      <img className="separators" alt="Separators" src="/img/separators-123.png" />
                      <div className="text-wrapper-11">Achteruitrijcamera met dynamische hulplijnen</div>
                      <img className="separators" alt="Separators" src="/img/separators-124.png" />
                      <div className="text-wrapper-11">Snelheidsbordenherkenning (ISLW)</div>
                      <img className="separators" alt="Separators" src="/img/separators-125.png" />
                      <div className="text-wrapper-11">Airconditioning (volautomatisch)</div>
                      <img className="separators" alt="Separators" src="/img/separators-126.png" />
                      <div className="text-wrapper-11">Parkeersensoren achter</div>
                      <img className="separators" alt="Separators" src="/img/separators-127.png" />
                      <div className="text-wrapper-11">3D afwerking interieurdelen</div>
                      <img className="separators" alt="Separators" src="/img/separators-119.png" />
                      <div className="text-wrapper-11">16-inch lichtmetalen velgen</div>
                      <img className="separators" alt="Separators" src="/img/separators-120.png" />
                      <div className="text-wrapper-11">Verwarmde stoelen voor</div>
                      <img className="separators" alt="Separators" src="/img/separators-121.png" />
                      <div className="text-wrapper-11">Draadloos telefoon opladen</div>
                      <img className="separators" alt="Separators" src="/img/separators-122.png" />
                      <div className="text-wrapper-11">Verwarmd stuurwiel</div>
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="titel-wrapper">
                    <div className="titel-2">i-Drive</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-4">
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-115.png" />
                      <img className="separators-2" alt="Separators" src="/img/separators-141.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-116.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-142.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-117.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-143.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-118.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-144.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-119.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-145.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-120.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-146.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-121.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-147.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-122.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-148.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-123.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-149.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-124.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-142.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-125.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-143.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-126.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-144.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-127.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-145.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-128.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-146.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-129.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-147.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-130.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-148.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-131.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-149.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-132.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-142.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-133.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-143.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-134.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-144.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-135.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-145.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-136.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-146.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-137.png" />
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="div-wrapper">
                    <p className="titel-3">
                      <span className="text-wrapper-12">
                        Comfort
                        <br />
                      </span>
                      <span className="text-wrapper-13">vanaf €275 p/m</span>
                    </p>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-5">
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-138.png" />
                      <img className="separators-2" alt="Separators" src="/img/separators-163.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-139.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-164.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-140.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-165.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-141.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-166.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-142.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-167.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-143.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-168.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-144.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-169.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-145.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-170.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-146.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-171.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-147.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-164.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-148.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-165.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-149.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-166.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-150.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-167.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-151.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-168.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-152.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-169.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-153.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-170.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-154.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-171.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-155.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-164.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-156.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-165.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-157.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-166.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-158.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-167.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-159.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-168.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-160.png" />
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="titel-wrapper">
                    <div className="titel-4">Comfort Smart</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-5">
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-161.png" />
                      <img className="separators-2" alt="Separators" src="/img/separators-185.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-162.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-186.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-163.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-187.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-164.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-188.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-165.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-189.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-166.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-190.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-167.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-191.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-168.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-192.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-169.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-193.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-170.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-186.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-171.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-187.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-172.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-188.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-173.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-189.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-174.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-190.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-175.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-191.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-176.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-192.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-177.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-193.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-178.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-186.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-179.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-187.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-180.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-188.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-181.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-189.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-182.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-190.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-183.png" />
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="titel-wrapper">
                    <div className="titel-4">Premium</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-5">
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-184.png" />
                      <img className="separators-2" alt="Separators" src="/img/separators-207.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-185.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-208.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-186.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-209.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-187.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-210.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-188.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-211.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-189.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-212.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-190.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-213.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-191.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-214.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-192.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-215.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-193.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-208.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-194.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-209.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-195.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-210.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-196.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-211.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-197.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-212.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-198.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-213.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-199.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-214.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-200.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-215.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-201.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-208.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-202.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-209.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-203.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-210.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-204.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-211.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-205.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-212.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-206.png" />
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="n-line">
                    <div className="titel-5">N line</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-6">
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-207.png" />
                      <img className="separators-2" alt="Separators" src="/img/separators-229.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-208.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-230.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-209.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-231.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-210.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-232.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-211.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-233.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-212.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-234.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-213.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-235.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-214.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-236.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-215.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-237.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-216.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-230.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-217.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-231.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-218.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-232.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-219.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-233.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-220.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-234.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-221.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-235.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-222.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-236.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-223.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-237.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-224.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-230.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-225.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-231.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-226.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-232.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-227.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-233.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-228.png" />
                      <img className="separators-3" alt="Separators" src="/img/separators-234.png" />
                      <img className="tabel-icons" alt="Tabel icons" src="/img/tabel-icons-229.png" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="button">
                <div className="text-wrapper">Vraag offerte aan</div>
                <img className="img" alt="Arrow" src="/img/arrow-9.png" />
              </button>
            </div>
          </div>
        )}

        <div
          className="SECTION-uitvoeringen-2"
          style={{
            height: screenWidth < 1200 ? "390.4vw" : screenWidth >= 1200 ? "52.24vw" : undefined,
            left: screenWidth < 1200 ? "0" : screenWidth >= 1200 ? "5.57vw" : undefined,
            top: screenWidth < 1200 ? "873.33vw" : screenWidth >= 1200 ? "133.8vw" : undefined,
            width: screenWidth < 1200 ? "256.8vw" : screenWidth >= 1200 ? "114.01vw" : undefined,
          }}
        >
          {screenWidth < 1200 && (
            <div className="overlap-2">
              <div className="rectangle" />
              <div className="tabel-sectie-2">
                <div className="text-wrapper-14">Uitvoeringen en hun functionaliteiten</div>
                <div className="tabel-2">
                  <div className="functionaliteiten-2">
                    <div className="bill-montly-wrapper">
                      <div className="bill-montly-2">Functionaliteiten</div>
                    </div>
                    <div className="img-wrapper">
                      <img className="frame-7" alt="Frame" src="/img/frame-9.png" />
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="titel-6">
                      <div className="overlap-group-4">
                        <img className="base" alt="Base" src="/img/base.png" />
                        <div className="titel-7">i-Drive</div>
                      </div>
                    </div>
                    <div className="onderdelen-2">
                      <div className="overlap-3">
                        <img className="base-2" alt="Base" src="/img/base-1.png" />
                        <div className="frame-8">
                          <img className="tabel-icons-2" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-4" alt="Separators" src="/img/separators.png" />
                          <img className="tabel-icons-3" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-1.png" />
                          <img className="tabel-icons-4" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-2.png" />
                          <img className="tabel-icons-5" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-3.png" />
                          <img className="tabel-icons-6" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-4.png" />
                          <img className="tabel-icons-7" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-5.png" />
                          <img className="tabel-icons-8" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-6.png" />
                          <img className="tabel-icons-9" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-7.png" />
                          <img className="tabel-icons-10" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-8.png" />
                          <img className="tabel-icons-11" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-9.png" />
                          <img className="tabel-icons-12" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-10.png" />
                          <img className="tabel-icons-13" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-11.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-12.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-13.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-14.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-15.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-3.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-4.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-18.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-6.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-20.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                          <img className="separators-5" alt="Separators" src="/img/separators-21.png" />
                          <img className="tabel-icons-14" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="titel-6">
                      <img className="base-3" alt="Base" src="/img/base-2.png" />
                      <p className="titel-8">
                        <span className="text-wrapper-15">
                          Comfort
                          <br />
                        </span>
                        <span className="text-wrapper-16">vanaf €275 p/m</span>
                      </p>
                    </div>
                    <div className="onderdelen-2">
                      <img className="base-4" alt="Base" src="/img/base-3.png" />
                      <div className="frame-8">
                        <img className="tabel-icons-15" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-6" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-16" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-7" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-17" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-8" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-18" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-9" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-19" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-10" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-20" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-11" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-21" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-12" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-22" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-13" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-23" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-14" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-24" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-15" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-25" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-16" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-26" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-17" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-18" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-27" alt="Tabel icons" src="/img/dashboard-auto.png" />
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="titel-6">
                      <img className="base-5" alt="Base" src="/img/base-2.png" />
                      <div className="titel-9">Comfort Smart</div>
                    </div>
                    <div className="onderdelen-2">
                      <img className="base-6" alt="Base" src="/img/base-3.png" />
                      <div className="frame-8">
                        <img className="tabel-icons-28" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-19" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-29" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-20" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-30" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-21" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-31" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-22" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-32" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-23" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-33" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-24" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-34" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-25" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-35" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-26" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-36" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-27" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-37" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-28" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-38" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-29" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-39" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-30" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-31" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-40" alt="Tabel icons" src="/img/dashboard-auto.png" />
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="titel-6">
                      <img className="base-7" alt="Base" src="/img/base-2.png" />
                      <div className="titel-9">Premium</div>
                    </div>
                    <div className="onderdelen-2">
                      <img className="base-8" alt="Base" src="/img/base-3.png" />
                      <div className="frame-8">
                        <img className="tabel-icons-41" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-32" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-42" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-33" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-43" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-34" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-44" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-35" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-45" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-36" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-46" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-37" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-47" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-38" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-48" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-39" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-49" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-40" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-50" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-41" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-51" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-42" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-52" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-43" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-44" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-53" alt="Tabel icons" src="/img/dashboard-auto.png" />
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="n-line-2">
                      <img className="base-9" alt="Base" src="/img/base-2.png" />
                      <div className="titel-10">N line</div>
                    </div>
                    <div className="onderdelen-2">
                      <img className="base-10" alt="Base" src="/img/base-3.png" />
                      <div className="frame-9">
                        <img className="tabel-icons-54" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-45" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-55" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-46" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-56" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-47" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-57" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-48" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-58" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-49" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-59" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-50" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-60" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-51" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-61" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-52" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-62" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-53" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-63" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-54" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-64" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-55" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-65" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-56" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                        <img className="separators-57" alt="Separators" src="/img/base-2.png" />
                        <img className="tabel-icons-66" alt="Tabel icons" src="/img/dashboard-auto.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="button-2">
                  <div className="text-wrapper-17">Vraag offerte aan</div>
                  <img className="arrow" alt="Arrow" src="/img/color-white-type-button.png" />
                </button>
                <div className="arrow-wrapper">
                  <img className="arrow-2" alt="Arrow" src="/img/arrow-3.png" />
                </div>
                <div className="group-2">
                  <img className="arrow-3" alt="Arrow" src="/img/arrow-4.png" />
                </div>
              </div>
            </div>
          )}

          {screenWidth >= 1200 && (
            <>
              <div className="slider-images">
                <img className="hand-mobiel" alt="Hand mobiel" src="/img/hand-mobiel-1.png" />
                <img className="img-2" alt="Binnen auto" src="/img/binnen-auto-1.png" />
                <img className="img-2" alt="Dashboard auto" src="/img/dashboard-auto-1.png" />
                <img className="binnen-auto" alt="Binnen auto" src="/img/binnen-auto-2-1.png" />
              </div>
              <div className="slider-indicator">
                <div className="element" />
                <div className="element-2" />
                <div className="element-2" />
              </div>
              <div className="titel-frisse-kijk">
                <div className="text-wrapper-18">Hyundai i10</div>
                <p className="text-wrapper-19">Een frisse kijk op een gedurfd ontwerp</p>
              </div>
            </>
          )}
        </div>
        <div
          className="SECTION-frisse-kijk"
          style={{
            height: screenWidth < 1200 ? "146.93vw" : screenWidth >= 1200 ? "39.01vw" : undefined,
            left: screenWidth < 1200 ? "0" : screenWidth >= 1200 ? "30.83vw" : undefined,
            top: screenWidth < 1200 ? "696.0vw" : screenWidth >= 1200 ? "331.25vw" : undefined,
            width: screenWidth < 1200 ? "320.0vw" : screenWidth >= 1200 ? "38.39vw" : undefined,
          }}
        >
          {screenWidth < 1200 && (
            <>
              <div className="slider-images-2">
                <img className="hand-mobiel-2" alt="Hand mobiel" src="/img/hand-mobiel.png" />
                <img className="binnen-auto-2" alt="Binnen auto" src="/img/binnen-auto.png" />
                <img className="dashboard-auto" alt="Dashboard auto" src="/img/dashboard-auto.png" />
                <img className="binnen-auto-3" alt="Binnen auto" src="/img/dashboard-auto.png" />
              </div>
              <div className="titel-frisse-kijk-2">
                <div className="text-wrapper-20">Hyundai i10</div>
                <p className="text-wrapper-21">Een frisse kijk op een gedurfd ontwerp</p>
              </div>
            </>
          )}

          {screenWidth >= 1200 && (
            <>
              <div className="text-wrapper-22">Prijzentabel i10 Comfort</div>
              <div className="tabel-prijzen">
                <div className="aantal-maanden">
                  <div className="titel-11">
                    <div className="bill-montly-3">Aantal maanden</div>
                  </div>
                  <div className="onderdelen-3">
                    <div className="frame-3">
                      <div className="profile-groups">60 maanden</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-110.png" />
                      <div className="text-wrapper-11">60 maanden</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-111.png" />
                      <div className="text-wrapper-11">48 maanden</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-112.png" />
                      <div className="text-wrapper-11">48 maanden</div>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="titel-12">
                    <div className="titel-13">Aantal km</div>
                  </div>
                  <div className="onderdelen-4">
                    <div className="frame-10">
                      <div className="profile-groups">10.000</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-254.png" />
                      <div className="text-wrapper-11">20.000</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-255.png" />
                      <div className="text-wrapper-11">10.000</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-256.png" />
                      <div className="text-wrapper-11">20.000</div>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="titel-12">
                    <div className="titel-14">Maandbedrag</div>
                  </div>
                  <div className="onderdelen-4">
                    <div className="frame-10">
                      <div className="profile-groups">€ 312,-</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-257.png" />
                      <div className="text-wrapper-11">€ 358,11</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-258.png" />
                      <div className="text-wrapper-11">€ 342,-</div>
                      <img className="separators-58" alt="Separators" src="/img/separators-259.png" />
                      <div className="text-wrapper-11">€ 385,04</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button-3">
                <div className="text-wrapper">Vraag offerte aan</div>
                <img className="img" alt="Arrow" src="/img/arrow-10.png" />
              </button>
            </>
          )}
        </div>
        {screenWidth >= 1200 && (
          <footer className="FOOTER">
            <p className="bekijk-de-privacy">Bekijk de Privacy &amp; voorwaarden van deze actie.</p>
            <img className="line" alt="Line" src="/img/line-2-1.png" />
          </footer>
        )}

        {screenWidth < 1200 && (
          <>
            <div className="slider-indicator-2">
              <div className="element-3" />
              <div className="element-4" />
              <div className="element-4" />
            </div>
            <div className="SECTION-prijzentabel">
              <div className="text-wrapper-23">Prijzentabel i10 Comfort</div>
              <div className="tabel-prijzen-2">
                <div className="aantal-maanden-2">
                  <div className="titel-15">
                    <div className="bill-montly-4">Aantal maanden</div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <div className="frame-11">
                        <div className="profile-groups-2">60 maanden</div>
                        <img className="separators-59" alt="Separators" src="/img/separators-110.png" />
                        <div className="text-wrapper-11">60 maanden</div>
                        <img className="separators-59" alt="Separators" src="/img/separators-111.png" />
                        <div className="text-wrapper-11">48 maanden</div>
                        <img className="separators-59" alt="Separators" src="/img/separators-112.png" />
                        <div className="text-wrapper-11">48 maanden</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aantal-km">
                  <div className="titel-16">
                    <div className="overlap-group-6">
                      <img className="base-11" alt="Base" src="/img/base-10.png" />
                      <div className="titel-17">Aantal km</div>
                    </div>
                  </div>
                  <div className="onderdelen-5">
                    <div className="overlap-4">
                      <img className="base-12" alt="Base" src="/img/base-11.png" />
                      <div className="frame-12">
                        <div className="profile-groups-2">10.000</div>
                        <img className="separators-60" alt="Separators" src="/img/separators-113.png" />
                        <div className="text-wrapper-11">20.000</div>
                        <img className="separators-60" alt="Separators" src="/img/separators-114.png" />
                        <div className="text-wrapper-11">10.000</div>
                        <img className="separators-60" alt="Separators" src="/img/separators-115.png" />
                        <div className="text-wrapper-11">20.000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="maandbedrag">
                  <div className="titel-16">
                    <img className="base-13" alt="Base" src="/img/dashboard-auto.png" />
                    <div className="titel-18">Maandbedrag</div>
                  </div>
                  <div className="onderdelen-5">
                    <img className="base-14" alt="Base" src="/img/dashboard-auto.png" />
                    <div className="frame-12">
                      <div className="profile-groups-2">€ 312,-</div>
                      <img className="separators-61" alt="Separators" src="/img/dashboard-auto.png" />
                      <div className="text-wrapper-11">€ 358,11</div>
                      <img className="separators-62" alt="Separators" src="/img/dashboard-auto.png" />
                      <div className="text-wrapper-11">€ 342,-</div>
                      <img className="separators-63" alt="Separators" src="/img/dashboard-auto.png" />
                      <div className="text-wrapper-11">€ 385,04</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button-4">
                <div className="text-wrapper-17">Vraag offerte aan</div>
                <img className="arrow" alt="Arrow" src="/img/color-white-type-button.png" />
              </button>
            </div>
            <footer className="footer">
              <p className="bekijk-de-privacy-2">Bekijk de Privacy &amp; voorwaarden van deze actie.</p>
              <img className="line-2" alt="Line" src="/img/line-2.png" />
            </footer>
            <div className="overlap-5">
              <div className="SECTION-header-2">
                <div className="overlap-6">
                  <div className="groot-beeld-slider-2" />
                  <div className="CTA-balk-2">
                    <p className="private-lease-nu-2">
                      Private Lease nu tijdelijk
                      <br />
                      vanaf €275 p/m*
                    </p>
                    <button className="button-5">
                      <div className="text-wrapper-24">Vraag offerte aan</div>
                      <img className="arrow-4" alt="Arrow" src="/img/arrow-6.png" />
                    </button>
                  </div>
                </div>
                <div className="hoofd-titel-tekst-2">
                  <div className="nieuw-wrapper">
                    <div className="nieuw-2">NIEUW</div>
                  </div>
                  <div className="frame-13">
                    <img className="de-vernieuwde-2" alt="De vernieuwde" src="/img/de-vernieuwde-hyundai-i10.jpg" />
                    <div className="text-wrapper-25">Maak een groots statement</div>
                  </div>
                </div>
                <p className="profiteer-nu-van-een-2">
                  Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.
                  <br />
                  Je stapt al in vanaf €275 per maand*
                </p>
                <p className="text-wrapper-26">
                  * Het maandbedrag van €275 geldt op basis van een looptijd van 72 maanden en 5.000 km per jaar bij de
                  i10 Comfort!
                </p>
              </div>
              <div className="navigatie-slider-2">
                <img className="arrow-5" alt="Arrow" src="/img/arrow-7.png" />
                <img className="arrow-6" alt="Arrow" src="/img/arrow-8.png" />
              </div>
              <div className="ontdek-meer-2">ONTDEK MEER</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
