import React from 'react';

const Recomends = () => {
    return (
        <div>
            <div className="tips">
                <h3>💡 Рекомендации по кето-питанию</h3>
                <ul>
                    <li>Поддерживайте потребление углеводов ниже 20-30 г в день</li>
                    <li>70-80% калорий должны поступать из полезных жиров</li>
                    <li>Пейте 3-4 литра воды в день с добавлением электролитов</li>
                    <li>Избегайте скрытых углеводов в соусах и полуфабрикатах</li>
                </ul>
            </div>

            <div className="week">
                <h2>Популярные кето-ужины</h2>

                <div className="day">
                    <h3><span className="emoji">🥩</span>Стейк с голубым сыром</h3>
                    <div className="meal">
                        <span className="meal-title">Ингредиенты:</span> говяжий стейк (200г), голубой сыр (30г), руккола, оливковое масло
                    </div>
                    <div className="meal">
                        <span className="meal-title">Рекомендация:</span> Подавать с бокалом сухого красного вина (до 150 мл)
                    </div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🍗</span>Хрустящие куриные бедра</h3>
                    <div className="meal">
                        <span className="meal-title">Ингредиенты:</span> куриные бедра с кожей (2 шт.), паприка, чесночный порошок, соль
                    </div>
                    <div className="meal">
                        <span className="meal-title">Совет:</span> Для хрустящей кожицы запекайте последние 10 минут при 220°C
                    </div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🥑</span>Тако из листьев салата</h3>
                    <div className="meal">
                        <span className="meal-title">Ингредиенты:</span> говяжий фарш (200г), листья салата, авокадо, сметана, острый соус
                    </div>
                    <div className="meal">
                        <span className="meal-title">Вариант:</span> Можно заменить говядину на свиной фарш с повышенной жирностью
                    </div>
                </div>
            </div>

            <div className="food-list">
                <div className="allowed">
                    <h3>Рекомендуемые продукты</h3>
                    <ul>
                        <li>Жирное мясо (грудинка, бекон, утка)</li>
                        <li>Жирная рыба (лосось, скумбрия)</li>
                        <li>Яйца (особенно желтки)</li>
                        <li>Авокадо и оливки</li>
                        <li>Твердые и мягкие жирные сыры</li>
                    </ul>
                </div>

                <div className="forbidden">
                    <h3>Избегайте</h3>
                    <ul>
                        <li>Сахар и подсластители (кроме стевии)</li>
                        <li>Зерновые и крупы</li>
                        <li>Крахмалистые овощи</li>
                        <li>Фрукты (кроме ягод)</li>
                        <li>Растительные масла с высоким содержанием Омега-6</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Recomends;